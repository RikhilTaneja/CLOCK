import React, { useEffect, useState } from "react";

export default function Clock() {

  useEffect(() => {
    document.title = "Clock";
  }, []);

  const [time, setTime] = useState(new Date());
  setInterval(() => {
    setTime(new Date());
  }, 1000);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div id="clock-time">
      <div id="clock-content">
        <div className="time-head">hours</div>
        <div className="hours time">{hours < 10 ? "0" + hours : hours}</div>
      </div>
      <div id="clock-content">
        <div className="time-head">minutes</div>
        <div className="minutes time">
          {minutes < 10 ? "0" + minutes : minutes}
        </div>
      </div>
      <div id="clock-content">
        <div className="time-head">seconds</div>
        <div className="seconds time">
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>
    </div>
  );
}
