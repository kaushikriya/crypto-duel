import { useCallback, useEffect, useState } from "react";

export const Counter=(targetTime: number)=>{
    const calculateTimeRemaining = useCallback(() => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        if (difference <= 0) {
          // Timer has reached or passed the target time
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
      },[targetTime])

      const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining);
        }, 1000);

        return () => clearInterval(intervalId);
      }, [calculateTimeRemaining, targetTime]);

      return (
        <div>
          <h1>Countdown Timer</h1>
          <p>
            Time Remaining: {timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
          </p>
        </div>
      );
    };
