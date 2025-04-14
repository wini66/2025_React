import React from "react";

export default function Header({ title, subtitle, logoText }) {
  return (
    <header className="bg-blue-600 text-white py-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">{logoText}</div>
          <div className="hidden md:block"></div>
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-extrabold mb-2 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-blue-100 font-light">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
