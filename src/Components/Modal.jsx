// src/Components/Modal.jsx
import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export default function Modal({ isOpen, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      phone: "+998",
    },
  });

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  const close = () => {
    reset();
    onClose();
  };

  const onFormSubmit = (data) => {
    onSubmit(data);
    close();
  };

  return (
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__window">
        <button className="modal__close" onClick={close}>
          &times;
        </button>
        <h2 className="modal__title">Ro'yxatdan o'tish</h2>

        <form className="modal__form" onSubmit={handleSubmit(onFormSubmit)}>
          {/* Имя и фамилия */}
          <label>
            Ismingiz
            <input
              type="text"
              {...register("name", {
                required: "Ismingizni kiriting",
                minLength: {
                  value: 3,
                  message: "Не менее 3 символов",
                },
              })}
              placeholder="Ismingiz"
            />
            {errors.name && (
              <p className="modal__error">{errors.name.message}</p>
            )}
          </label>

          {/* Телефон */}
          <label>
            Telefon raqami
            <input
              type="tel"
              inputMode="tel"
              {...register("phone", {
                required: "Nomerni toliq kiriting",
                pattern: {
                  // +998 и ровно 9 цифр после
                  value: /^\+998\d{9}$/,
                  message:
                    "Nomerni toliq kiriting",
                },
              })}
              placeholder="+998991234567"
            />
            {errors.phone && (
              <p className="modal__error">{errors.phone.message}</p>
            )}
          </label>

          <button type="submit" className="modal__submit">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
