import { createContext, useContext, useState } from 'react';

const ClockContext = createContext();

export default function ClockContextProvider ({ children }) {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState({type: "Session", min:sessionLength, sec:0});
  const [beep, setBeep] = useState(false);
  const [reset, setReset] = useState(false);
  
  return (
    <ClockContext.Provider
      value={
        { 
          breakLength, 
          setBreakLength, 
          sessionLength, 
          setSessionLength,
          timer,
          setTimer,
          beep,
          setBeep,
          reset,
          setReset
        }
      }
    >
      {children}
    </ClockContext.Provider>
  );
}

export function useClockContext() {
  return useContext(ClockContext);
}