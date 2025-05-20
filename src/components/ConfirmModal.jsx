// components/ConfirmModal.jsx
import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-5050">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <p className="text-gray-800 text-lg mb-4">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer transition-all duration-400"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-700 transition-all duration-400"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
