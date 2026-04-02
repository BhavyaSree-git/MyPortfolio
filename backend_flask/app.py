from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
from flask_cors import CORS
load_dotenv()

app = Flask(__name__)
CORS(app)
# Use SQLite for development, MySQL for production
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL') or 'sqlite:///portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Mail config
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT') or 587)
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'true').lower() in ('true', '1', 'yes')
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'false').lower() in ('true', '1', 'yes')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER') or app.config['MAIL_USERNAME']

db = SQLAlchemy(app)
mail = Mail(app)


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(256), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())


@app.route('/')
def index():
    return jsonify(status='ok')


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    if not name or not email or not message:
        return jsonify(error='name, email and message are required'), 400

    # persist to DB
    contact = Contact(name=name, email=email, message=message)
    db.session.add(contact)
    db.session.commit()

    # send email notification (best-effort)
    try:
        msg = Message(
            subject=os.getenv('EMAIL_SUBJECT', f'New Portfolio Contact: {name}'),
            recipients=[os.getenv('TO_EMAIL')]
        )

        msg.html = f"""
        <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb;">
            
            <h2 style="color: #0ea5e9; margin-bottom: 10px;">
            New Contact Message
            </h2>

            <p style="color: #374151; font-size: 14px;">
            You received a new message from your portfolio website.
            </p>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>

            <div style="background: #f9fafb; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap;">
            {message}
            </div>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p style="font-size: 12px; color: #6b7280;">
            This message was sent from your Portfolio Contact Form.
            </p>

        </div>
        </div>
        """
        mail.send(msg)
    except Exception as e:
        app.logger.error('Mail send failed: %s', e)
        return jsonify(ok=True, warning='failed_to_send_email'), 200

    return jsonify(ok=True), 200


if __name__ == '__main__':
    # create tables if they don't exist
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000)), debug=os.getenv('FLASK_DEBUG', 'false').lower() == 'true')

