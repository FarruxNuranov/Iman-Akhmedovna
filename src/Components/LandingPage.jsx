import React, { useState, useEffect } from 'react';
import { FiCalendar } from 'react-icons/fi';
import styles from './LandingPage.module.scss';
import instructor from '../assets/s.png';

export default function LandingPage() {
    const [timeLeft, setTimeLeft] = useState(60);
    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(t => (t > 0 ? t - 1 : 0));
        }, 1000);
        return () => clearInterval(id);
    }, []);
    const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const ss = String(timeLeft % 60).padStart(2, '0');

    return (
        <div className={styles.root}>
            <div className="container">
                {/* Верхняя панель */}
              

                {/* Основной блок — две колонки */}
                <div className={styles.content}>
                    
                    {/* Левая колонка */}
                    <div className={styles.left}>
                          <div className={styles.topInfo}>
                    <div className={styles.calendar}>
                        <FiCalendar className={styles.calendarIcon} />
                        <span className={styles.calendarText}>
                            13–14–15&nbsp;may | 20:00
                        </span>
                    </div>
                    <p className={styles.subtitle}>
                       Iman Akhmedovna 3 kunlik bepul masterklass
                    </p>
                </div>
                        <h1 className={styles.title}>
                            Nikoh yo‘lida to‘siqlar bormi? Yoki oilangizda sovuqlik sezilyaptimi?
                        </h1>
                        <h1 className={styles.title}>
                            Marafon - 2 kun davomida yopiq telegram kanalda bo’ladi. Bu kanalga qo’shilish uchun ro’yxatdan o’ting! (2 daqiqa ichida ro’yxatdan o’tsangiz BEPUL)
                        </h1>
                        <p className={styles.desc}>
                            3 kechalik BEPUL masterklassda quyidagilarni bilib olasiz:

                        </p>
                        <ul className={styles.list}>
                            <li><span>✔️</span> Saodatli nikohga erishish uchun qo’rquv va vohimalardan xalos bo’lish. </li>
                            <li><span>✔️</span> Xayrli turmush so’rash, erni moliyaviy barakasini oshirish uchun 5ta texnika.</li>
                            <li><span>✔️</span> Er xotin munosobatlari yomonlashuvi, 3-shaxslar aralashuvi, nega xiyonatga uchrash sabablari va Allohdan shokoladlar so’rash sirlari haqida o’rganasiz</li>
                        </ul>
                        <button className={styles.btn}>Bepul qatnashish</button>
                        <div className={styles.timerCard}>
                            <div className={styles.timerText}>
                                Hozirroq ro‘yxatdan o‘ting! Joylar cheklangan!
                            </div>                              
                            <div className={styles.timer}>
                                <div>
                                    <div className={styles.timeValue}>{mm}</div>
                                    <div className={styles.timeLabel}>daqiqa</div>
                                </div>
                                <div>
                                    <div className={styles.timeValue}>{ss}</div>
                                    <div className={styles.timeLabel}>soniya</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка */}
                    <div className={styles.right}>
                        <img src={instructor} alt="Instructor" className={styles.photo} />
                        <div className={styles.nameTag}>
                            <div className={styles.name}>Iman<strong>Akhmedovna</strong></div>
                            <div className={styles.prof}>Oilaviy munosabatlar va bolalar psixologi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
