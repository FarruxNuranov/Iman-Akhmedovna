import React, { useState } from "react";

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith("+998")) return;
    setPhone(value.replace(/[^\d+]/g, ""));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const cleanedPhone = phone.replace(/[^\d]/g, ""); // Удаляем всё кроме цифр
  const finalPhone = "+" + cleanedPhone;            // Добавляем +

  const scriptUrl = "https://script.google.com/macros/s/AKfycbzTMev__3oYGJ-bqLqh5qLphX9PcjPeMW6V0dgOuq1BxF0AGyrJ2iwOmVluUUOLCuZx/exec";
  const proxyUrl = "https://corsproxy.io/?";
  const finalUrl = `${proxyUrl}${encodeURIComponent(scriptUrl)}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(finalPhone)}`;

  try {
    const res = await fetch(finalUrl);
    const text = await res.text();

    let data = {};
    try {
      data = JSON.parse(text);
    } catch (err) {
      alert("⚠️ Ответ сервера не JSON");
      return;
    }

    if (data.result === "duplicate") {
      alert("⚠️ Такой номер уже есть.");
    } else if (data.result === "success") {
      alert("✅ Заявка отправлена!");
      setName("");
      setPhone("+998");
      onClose();
    } else {
      alert("❌ Неизвестный ответ: " + text);
    }
  } catch (err) {
    console.error("🔥 Network/proxy error:", err);
    alert("🔥 Ошибка соединения с сервером");
  }
};

  return (
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__window">
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal__title">Заявка на участие</h2>
        <form onSubmit={handleSubmit} className="modal__form">
          <label>
            Имя Фамилия
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </label>
          <button type="submit" className="modal__submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
