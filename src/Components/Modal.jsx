import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const formatPhone = (value) => {
    // Получаем только цифры из введенного значения
    const digits = value.replace(/\D/g, "");
    
    // Если длина меньше или равна 3 (код страны), возвращаем только +998
    if (digits.length <= 3) return "+998";
    
    // Форматируем номер по частям
    let formatted = "+998";
    
    // Добавляем код города (2 цифры)
    if (digits.length > 3) {
      formatted += ` (${digits.slice(3, 5)}`;
    }
    
    // Добавляем первую часть номера (3 цифры)
    if (digits.length > 5) {
      formatted += `)-${digits.slice(5, 8)}`;
    }
    
    // Добавляем вторую часть (2 цифры)
    if (digits.length > 8) {
      formatted += `-${digits.slice(8, 10)}`;
    }
    
    // Добавляем последние цифры (если есть)
    if (digits.length > 10) {
      formatted += `-${digits.slice(10, 12)}`;
    }
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    
    // Если пользователь пытается удалить +998, не даём это сделать
    if (input.length < 4) {
      setPhone("+998");
      return;
    }
    
    // Проверяем, начинается ли с +998
    if (!input.startsWith("+998")) {
      return;
    }
    
    setPhone(formatPhone(input));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneError(""); // Сбрасываем ошибку при новой попытке

    const cleanedPhone = phone.replace(/[^\d]/g, "");
    const finalPhone = "+" + cleanedPhone;

    // Форматируем дату в формате "dd.MM.yyyy HH:mm:ss"
    const now = new Date();
    const formattedDate = now
      .toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })
      .replace(",", "");

    // 👇 URL скрипта Google Apps Script
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxSu3sXY-o4zMTtwuDeuLGV83cRsYtCDhhJUsTG0r5BDvsbi8DVZazz1speiekstOLh/exec"; // <-- заменишь

    const url = `${scriptUrl}?name=${encodeURIComponent(
      name
    )}&phone=${encodeURIComponent(finalPhone)}&date=${encodeURIComponent(
      formattedDate
    )}`;

    try {
      const res = await fetch(url);
      const json = await res.json();

      if (json.result === "duplicate") {
        setPhoneError("⚠️ Bu raqam ro`yxatdan otgan");
      } else if (json.result === "success") {
        navigate("/telegram")
        setName("");
        setPhone("+998");
        setPhoneError("");
        onClose();
      } else {
        setPhoneError("❌ Неизвестный ответ");
      }
    } catch (err) {
      console.error("🔥 Ошибка сети:", err);
      setPhoneError("🔥 Ошибка соединения с сервером");
    }
  };

  return (
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__window">
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal__title">Ro'yxatdan o'tish</h2>
        <form onSubmit={handleSubmit} className="modal__form">
        <label >Pastdagi formani to'ldirishingiz bilan yopiq kanalga qo'shilasiz!</label>
          <label>
            Ismingizni kiriting
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Telefon raqami
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+998 (__) - ___ - __ - __"
              required
              maxLength={19}
            />
            {phoneError && <div className="input-error">{phoneError}</div>}
          </label>
          <button type="submit" className="modal__submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
