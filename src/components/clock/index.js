import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const secondDegree = time.getSeconds() * 6;
  const minuteDegree = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hoursDegrees = time.getHours() * 30 + time.getMinutes() * 0.5;

  return (
    <div className="clock">
      <div
        className="hand hour"
        style={{ transform: `rotate(${hoursDegrees}deg)` }}
      />
      <div
        className="hand minute"
        style={{ transform: `rotate(${minuteDegree}deg)` }}
      />
      <div
        className="hand second"
        style={{ transform: `rotate(${secondDegree}deg)` }}
      />
      <div className="center"></div>
    </div>
  );
};

export default Clock;
