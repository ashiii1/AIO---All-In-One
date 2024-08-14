import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Timer.module.css";
import Container from "../contentContainer/Container";
import TimerImg from "../../../assets/images/counter-timer-img.png";

const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const count = () => {
    const destination = new Date('Dec 25, 2024');
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(difference % (1000 * 60) / 1000);

      if(difference < 0) clearInterval(interval.current)
      else {
        setDays(days)
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    })
  };

  useEffect(() => {
    count()
  });

  return (
      <section className={styles.timer}>
        <Container>
          <div className={styles.timer_counterBox}>
            <div className={styles.timer_counter}>
              <div className={styles.timer_title}>
                <h4>Limited Offers</h4>
                <h3>Quality Armchair</h3>
              </div>
              <div className={styles.timer_wrapper}>
                <div className={styles.timer_data}>
                  <div className={styles.timer_time}>
                    <h2>{days}</h2>
                    <h5>Days</h5>
                  </div>
                  <span>
                    :
                  </span>
                </div>
                <div className={styles.timer_data}>
                  <div className={styles.timer_time}>
                    <h2>{hours}</h2>
                    <h5>Hours</h5>
                  </div>
                  <span>
                    :
                  </span>
                </div>
                <div className={styles.timer_data}>
                  <div className={styles.timer_time}>
                    <h2>{minutes}</h2>
                    <h5>Minutes</h5>
                  </div>
                  <span>
                    :
                  </span>
                </div>
                <div className={styles.timer_data}>
                  <div className={styles.timer_time}>
                    <h2>{seconds}</h2>
                    <h5>Seconds</h5>
                  </div>
                </div>
              </div>
              <Link to='/shop'>
                <motion.button whileHover={{scale: 1.1}} className={styles.shop_btn}>Visit Store</motion.button>
              </Link>
            </div>
            <div className={styles.timer_img}>
              <img src={TimerImg} alt="timer counter" />
            </div>
          </div>
        </Container>
      </section>
  );
}

export default Timer;