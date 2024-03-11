import { useEffect, useRef, useState } from "react"
import "./App.css"

export const SecondsCountdown = () => {
  const [formVisible, setFormVisible] = useState(true)
  const [seconds, setSeconds] = useState("")
  const intervalRef = useRef(null)
  const [notifsAllowed, setNotifsAllowed] = useState(
    Notification.permission === "granted"
  )

  const askForNotifs = async () => {
    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      setNotifsAllowed(true)
    }
  }

  const start = () => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        console.log("interval running...")
        const updatedSeconds = prevSeconds - 1

        if (updatedSeconds === 0 && intervalRef.current !== null) {
          clearInterval(intervalId)
          intervalRef.current = null

          if (Notification.permission === "granted") {
            new Notification("Time is up!")
          }

          document.title = `⏰ Time is up`
        } else if (intervalRef.current !== null) {
          document.title = `⏰ ${updatedSeconds}s left`
        }
        return updatedSeconds
      })
    }, 1000)

    intervalRef.current = intervalId

    setFormVisible(false)
  }

  const reset = () => {
    document.title = "⏰ Timer"
    setFormVisible(true)
    setSeconds("")
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => {
    document.title = "⏰ Timer"
  }, [])

  /*
  useEffect(() => {
    if (seconds && !formVisible) {
      document.title = `⏰ ${seconds}s left`;
    } else if (seconds === 0) {
      document.title = "⏰ Time is up!";
    } else {
      document.title = "⏰ Timer";
    }
  }, [seconds, formVisible]);
  */

  return (
    <div className="container">
      {!notifsAllowed && (
        <button onClick={askForNotifs}>Enable notifications 🔔</button>
      )}
      {formVisible ? (
        <>
          <input
            onChange={(e) => setSeconds(e.target.value)}
            value={seconds}
            type="text"
          />
          <button onClick={start}>Start</button>
        </>
      ) : (
        <>
          {seconds === 0 && <div>Time is up!</div>}
          <h1>{seconds}</h1>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  )
}
