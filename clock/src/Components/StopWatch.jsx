import React, { useEffect, useState } from "react";
let intervalId;
export default function StopWatch() {
  useEffect(() => {
    document.title = "StopWatch";
  }, []);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const start = () => {
    intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes == 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);
  };
  const stop = () => {
    clearInterval(intervalId);
  };
  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  return (
    <div id="stopwatch-main">
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
      <div id="buttons">
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}
