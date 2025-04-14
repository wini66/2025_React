import { X, Bell } from "lucide-react";
import React from "react";

export default function Notification({ message, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in">
      <Bell className="text-white" size={20} />
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-white hover:text-gray-200"
      >
        <X size={16} />
      </button>
    </div>
  );
}
