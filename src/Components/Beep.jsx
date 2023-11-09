import { useEffect, useRef } from "react";
import { useClockContext } from "./../ClockContextProvider";

export default function Beep() {
  const { beep, setBeep, reset, setReset } = useClockContext();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (beep && audio) {
        audio.play().then(() => {
          setBeep(!beep);
        });
      }
  },[beep]);

  useEffect(() => {
    const audio = audioRef.current;

    if (reset) {
      audio.pause();
      audio.currentTime = 0;
      setReset(false);
    }
  },[reset])
  
  return (
    <audio 
      ref={audioRef}
      preload="auto"
      id="beep" 
      src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav">
    </audio>
  );
}
