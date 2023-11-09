import { useClockContext } from "./../ClockContextProvider";

export default function BreakControl() {
  const { breakLength, setBreakLength } = useClockContext();

  const handleDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }
  
  const handleIncrement = () => {
    if(breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }
  
  return (
    <div className="length-control">
      <div id="break-label">Break Length</div>
      <button id="break-decrement" className="btn-level" onClick={handleDecrement}>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 384 512">
          <path fill="currentColor" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </button>
      <div id="break-length" className="btn-level">{breakLength}</div>
      <button id="break-increment" className="btn-level" onClick={handleIncrement}>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 384 512">
          <path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
        </svg>
      </button>
    </div>
  );
}