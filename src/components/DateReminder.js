// src/components/DateReminder.js
import React, { useState, useEffect } from 'react';
import './DateReminder.css'; // Import the CSS file

const DateReminder = () => {
  const targetDate = new Date('March 15, 2024 00:00:00 GMT+00:00'); // Set your target date
  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown(targetDate));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateCountdown(targetDate) {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Event has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="date-reminder">
      {/* <h2 className="save-the-date">Save the Date</h2> <br/> */}
      <div className="countdown-box">
        <p className="countdown-value">{countdown.days}</p>
        <p className="countdown-label">Days</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{countdown.hours}</p>
        <p className="countdown-label">Hours</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{countdown.minutes}</p>
        <p className="countdown-label">Minutes</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{countdown.seconds}</p>
        <p className="countdown-label">Seconds</p>
      </div>
    </div>
  );
};

export default DateReminder;


