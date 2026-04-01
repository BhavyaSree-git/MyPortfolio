import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
      {children}
    </div>
  );
}