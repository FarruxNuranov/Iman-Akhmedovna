// src/Components/Modal.jsx
import React from "react";
import PropTypes from "prop-types";

export default function Modal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__window">
        <button className="modal__close" onClick={onClose}>&times;</button>
        <h2 className="modal__title">Ro'yxatdan o'tish</h2>
        <form
          className="modal__form"
          onSubmit={e => {
            e.preventDefault();
            const { name, phone } = e.target.elements;
            onSubmit({
              name:  name.value.trim(),
              phone: phone.value.trim()
            });
            onClose();
          }}
        >
          <label>
            Ism Familya
            <input type="text" name="name" required placeholder="Ism Familya" />
          </label>
          <label>
            Telefon raqami
            <input type="tel" name="phone" required placeholder="+998 90 123-45-67" />
          </label>
          <button type="submit" className="modal__submit">
            Yubорish
          </button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen:   PropTypes.bool.isRequired,
  onClose:  PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
