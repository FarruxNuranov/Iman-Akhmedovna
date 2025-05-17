
import { FiCalendar,  } from "react-icons/fi";
import { FaTelegramPlane  } from "react-icons/fa";

export default function Telegram() {
 




  return (
    <div className="telegram-root">
      <div className="container">
        <div className="calendar_box">
          <div className="calendar">
            <FiCalendar className="calendarIcon" />
            <span className="calendarText"> Boshlanish vaqti: 3–4–5 iyun | 21:00</span>
          </div>
        </div>

        <div className="telegram_box">
          <h1 className="telegram-heading_war">
            OXIRGI QADAM QOLDI!
          </h1>
          <h1 className="telegram-heading">
            Masterklassga qatnashish uchun tugmani
            bosib kanalga obuna bo’ling
          </h1>
          {/* Кнопка перехода в Telegram */}
          <a
            href="https://t.me/+KqIw46tJ1zcwYzEy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn telegram-btn"
          >
            <FaTelegramPlane className="telegram-icon" />
            OBUNA BOʻLISH
          </a>
        </div>
      </div>
    </div>
  );
}
