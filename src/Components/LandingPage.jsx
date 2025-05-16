import React, { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Modal from "./Modal";
import { SHEETS_WEBAPP_URL } from "../config"; // ← импортируем URL
import { mobileBg } from "../utils/getImg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const id = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

const handleFormSubmit = async ({ name, phone }) => {
  const params = new URLSearchParams({ name, phone });
  const url    = `${SHEETS_WEBAPP_URL}?${params.toString()}`;
  console.log("→ GET", url);

  try {
    const res  = await fetch(url);            // простой GET
    console.log("← status", res.status);
    const json = await res.json();            // парсим JSON
    console.log("← json", json);

    if (json.result === "duplicate") {
      alert("⚠ Вы уже оставили заявку с этим номером.");
    } else if (json.result === "success") {
      alert("🎉 Вы успешно оставили заявку!");
     
    } else {
      alert("❌ Ошибка: " + (json.error || "неизвестно"));
    }
  } catch (err) {
    console.error("🔥 Network/parsing error:", err);
   
      navigate("/telegram")
  }
};


  return (
    <div className="root">
      <div className="container">
        <div className="content">
          {/* Календарь */}
          <div className="calendar">
            <FiCalendar className="calendarIcon" />
            <span className="calendarText">13–14–15 may | 20:00</span>
          </div>
          <p className="subtitle">
            Iman Akhmedovna 3 kunlik <strong>bepul</strong> masterklass
          </p>

          {/* Мобильная картинка + кнопка */}
          <div className="mobile__img">
            <img src={mobileBg} alt="" className="avatar" />
            <div className="btn__box">
              <button className="btn_mobile" onClick={() => setModalOpen(true)}>
                Bepul qatnashish
              </button>
              <div className="timerCard_btn">
                <p className="timerText">
                  Hozirroq ro‘yxatdan o‘ting! Joylar cheklangan!
                </p>
                <div className="timer">
                  <div className="timeBlock">
                    <div className="timeValue">{mm}</div>
                    <div className="timeLabel">daqiqa</div>
                  </div>
                  <div className="timeBlock">
                    <div className="timeValue">{ss}</div>
                    <div className="timeLabel">soniya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Основная колонка */}
          <div className="left">
            <h1 className="title">
              Nikoh yo‘lida to‘siqlar bormi? <br />
              Yoki oilangizda sovuqlik sezilyaptimi?
            </h1>
            <p className="lead">
              Marafon — <strong>2 kun</strong> yopiq Telegram-kanalda bo‘ladi.
              <br />
              Ro‘yxatdan o‘ting — (<strong>2 daqiqa ichida</strong> BEPUL)
            </p>
            <p className="desc">
              3 kechalik BEPUL masterklassda quyidagilarni bilib olasiz:
            </p>
            <ul className="list">
              <li>
                Saodatli nikohga erishish uchun qo‘rq­uv va vohimalardan xalos
                bo‘lish
              </li>
              <li>
                Xayr­li turmush so‘rash, erni moliyaviy barakasini oshirish
                uchun 5 ta texnika
              </li>
              <li>
                Er-xotin munosabatlari yomonlashuvi, 3-shaxslar aralashuvi va
                xiyonat sabablari
              </li>
            </ul>
            <div className="btn__box">
              <button className="btn" onClick={() => setModalOpen(true)}>
                Bepul qatnashish
              </button>
              <div className="timerCard">
                <p className="timerText">
                  Hozirroq ro‘yxatdan o‘ting! Joylar cheklangan!
                </p>
                <div className="timer">
                  <div className="timeBlock">
                    <div className="timeValue">{mm}</div>
                    <div className="timeLabel">daqiqa</div>
                  </div>
                  <div className="timeBlock">
                    <div className="timeValue">{ss}</div>
                    <div className="timeLabel">soniya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(data) => {
          handleFormSubmit(data);
          setModalOpen(false);
        }}
      />
    </div>
  );
}
