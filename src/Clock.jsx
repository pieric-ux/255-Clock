import BreakControl from "./Components/BreakControl";
import SessionControl from "./Components/SessionControl";
import Timer from "./Components/Timer";
import TimerControl from "./Components/TimerControl";
import Beep from "./Components/Beep";

export default function Clock() {
  return (
    <div id="app">
      <div>
        <h1 className="main-title">25 + 5 Clock</h1>
        <BreakControl />
        <SessionControl />
        <Timer />
        <TimerControl />
        <Beep />
      </div>
    </div>
  );
}