import { useState, useEffect } from "react";

export default function Countdown() {
  const weddingDate = "2025-7-24";

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const today = new Date();
      const weddingDay = new Date(weddingDate);
      const timeDiff = weddingDay - today;

      setDaysLeft(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
      setHoursLeft(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutesLeft(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
      setSecondsLeft(Math.floor((timeDiff % (1000 * 60)) / 1000));
    };

    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": daysLeft }}></span>
          </span>
          <span className="text-lg">Days</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": hoursLeft }}></span>
          </span>
          <span className="text-lg">Hours</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": minutesLeft }}></span>
          </span>
          <span className="text-lg">Minutes</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": secondsLeft }}></span>
          </span>
          <span className="text-lg">Seconds</span>
        </div>
      </div>
    </>
  );
}
