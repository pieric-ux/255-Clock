import { useEffect, useState } from "react";
import { useClockContext } from "./../ClockContextProvider";

export default function TimerControl() {
  const { sessionLength, setSessionLength, breakLength, setBreakLength, timer, setTimer, setBeep, setReset } = useClockContext();
  const [isPlay, setIsPlay] = useState(false);
 
  const decrementTimer = () => {
    if (isPlay) {
      if (timer.min === 0 && timer.sec === 0) {
        setBeep(true);
        if (timer.type === "Session") {
          setTimer({
            type: "Break",
            min: breakLength,
            sec: 0
          });
        } else {
          setTimer({
            type: "Session",
            min: sessionLength,
            sec: 0
          });
        }
      } else {
        if (timer.sec === 0) {
          setTimer({type: timer.type, min: timer.min - 1, sec: 59});
        } else {
          setTimer({type: timer.type, min: timer.min, sec: timer.sec -1});
        }
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(decrementTimer, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [decrementTimer]);
  
  const handleStartStop = () => {
    setIsPlay(!isPlay);
  }
  
  const handleReset = () => {
    setReset(true);
    setIsPlay(false);
    setSessionLength(25);
    setBreakLength(5);
    setTimer({type: "Session" , min: sessionLength, sec: 0});
  }
  
  return (
    <div className="timer-control">
      <button id="start_stop" onClick={handleStartStop}>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 384 512">
          <path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 320 512">
          <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
        </svg>
      </button>
      <button id="reset" onClick={handleReset}>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 512 512">
          <path fill="currentColor" d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/>
        </svg>
      </button>
    </div>
  );
}