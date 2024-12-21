import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [time, setTime] = useState(20 * 60); // 20 minutes in seconds
 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="countdown">
     <div className="timer">{formatTime(time)}</div>
    </div>
  );
};

export default Countdown;
