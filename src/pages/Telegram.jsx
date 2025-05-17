import React, { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";

export default function Telegram() {
  const [showSuccess, setShowSuccess] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
      window.location.href = "https://t.me/fnuranov"; // редирект
    }, 1000);

    return () => clearTimeout(timer); // очистка таймера
  }, []);

  return (
    <div className="telegram-root">
      <div className="container">
        <div className="calendar_box">
          <div className="calendar">
            <FiCalendar className="calendarIcon" />
            <span className="calendarText">13–14–15 may | 20:00</span>
          </div>
        </div>

        <div className="telegram_box">
          <h1 className="telegram-heading">Siz ro'yxatdan o'tdingiz ✅</h1>
     
        </div>
      </div>
    </div>
  );
}
