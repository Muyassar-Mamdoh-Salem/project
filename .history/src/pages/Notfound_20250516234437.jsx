// src/pages/NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">الصفحة التي تبحث عنها غير موجودة.</p>
      <a href="/" className="text-blue-600 underline">العودة إلى الصفحة الرئيسية</a>
    </div>
  );
};

export default NotFound;
