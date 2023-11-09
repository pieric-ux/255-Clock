import './App.css'
import Clock from './Clock'
import ClockContextProvider from './ClockContextProvider'

export default function App() {
  return (
    <ClockContextProvider>
      <div id="container">
        <Clock />
      </div>
    </ClockContextProvider>
  )
}
