# Flask backend for portfolio contact form

This folder contains a small Flask API that:
- exposes POST `/contact` to store messages in MySQL and send an email notification

Setup

1. Create a virtual environment and install dependencies

```bash
cd backend_flask
python -m venv venv
venv\Scripts\activate  # on Windows
pip install -r requirements.txt
```

2. Create a MySQL database and update `DATABASE_URL` in the `.env` file.

3. Start the app

```bash
set FLASK_DEBUG=true  # optional on Windows
python app.py
```

4. Example request

```bash
curl -X POST http://127.0.0.1:5000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","message":"Hello"}'
```

Notes

- The app uses SQLAlchemy with `pymysql`. The `db.create_all()` call will create the `contacts` table automatically.
- Configure a SMTP provider in the `.env` to enable email notifications.
