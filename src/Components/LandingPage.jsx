// src/components/LandingPage.jsx

import React, { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Modal from "./Modal";
import { mobileBg } from "../utils/getImg";

export default function LandingPage() {
  // 1) Таймер на 30 секунд
  const [timeLeft, setTimeLeft] = useState(30);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // 2) По истечении открываем модалку и сбрасываем
          setModalOpen(true);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="root">
      <div className="container">
        <div className="content">
          {/* Календарь */}
          <div className="calendar">
            <FiCalendar className="calendarIcon" />
            <span className="calendarText">Boshlanish vaqti: 3–4–5 iyun | 21:00</span>
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
              Master klass- 3 kun yopiq telegram kanalda bo’ladi.
              <br />
              Ro‘yxatdan o‘ting — (<strong>30 soniya ichida</strong> BEPUL)
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

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </div>
  );
}
