import { useEffect } from 'react';
import { useClockContext } from './../ClockContextProvider';

export default function Timer() {
  const { timer, setTimer, sessionLength } = useClockContext();

  useEffect(() => {
    setTimer({type: "Session", min: sessionLength, sec: 0});
  }, [sessionLength])
  
  return (
    <div className="timer">
      <div className={`timer-wrapper ${timer.min < 1 ? 'warning' : ''}`}>
        <div id="timer-label">{timer.type}</div>
        <div id="time-left">{(timer.min).toString().padStart(2, '0') + ':' + (timer.sec).toString().padStart(2,'0')}</div>
      </div>
    </div>
  );
}