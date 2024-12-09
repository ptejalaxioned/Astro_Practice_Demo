import { useState, useEffect } from 'react';

export default function SaleCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the end time (4 days from now)
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 4);

    // Function to update the countdown every second
    const updateCountdown = () => {
      const currentTime = new Date();
      const timeDifference = endTime - currentTime; // Calculate the time difference in milliseconds

      console.log('Time Difference:', timeDifference); // Debugging: Log the time difference

      if (timeDifference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        console.log('Countdown finished!'); // Debugging: Log when countdown finishes
        return;
      }

      // Calculate remaining time
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Debugging: Log each value to see if it's updating
      console.log(
        'Days:',
        days,
        'Hours:',
        hours,
        'Minutes:',
        minutes,
        'Seconds:',
        seconds
      );

      // Update the state
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // Update the countdown every second
    const timerInterval = setInterval(updateCountdown, 1000);

    // Run the countdown immediately on mount
    updateCountdown();

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // Empty array ensures this effect runs only once (when the component mounts)

  return (
    <div className="sale-countdown-up">
      <h3 className="first-letter-caps">Sale Countdown!</h3>
      <ul className="count-list">
        <li className="days">
          <span className="number">{timeLeft.days}</span>
          <span className="period">days</span>
        </li>
        <li className="hours">
          <span className="number">{timeLeft.hours}</span>
          <span className="period">hours</span>
        </li>
        <li className="minutes">
          <span className="number">{timeLeft.minutes}</span>
          <span className="period">minutes</span>
        </li>
        <li className="seconds">
          <span className="number">{timeLeft.seconds}</span>
          <span className="period">seconds</span>
        </li>
      </ul>
    </div>
  );
}
