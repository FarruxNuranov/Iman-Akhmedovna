import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

export default function Telegram() {
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
          <h1 className="telegram-heading">OXIRGI QADAM QOLDI!</h1>
          <p className="telegram-subheading">
            Masterklassga qatnashish uchun qizil tugmani bosib kanala obuna
            boʻling
          </p>

          <div className="telegram-arrows">
            <span className="telegram-arrow">↓</span>
            <span className="telegram-arrow">↓</span>
            <span className="telegram-arrow">↓</span>
            <span className="telegram-arrow">↓</span>
          </div>

          <a
            href="https://t.me/fnuranov"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-btn"
          >
            <FaTelegramPlane className="telegram-icon" />
            OBUNA BO'LISh
          </a>
        </div>
      </div>
    </div>
  );
}
