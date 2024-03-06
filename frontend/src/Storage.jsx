import { useState, useEffect } from "react"
import Cookie from "js-cookie"

export const Storage = () => {
  const [name, setName] = useState("")

  const saveWithClient = (event) => {
    event.preventDefault()

    const fd = new FormData(event.target)

    Cookie.set("name", fd.get("name"), {
      expires: 1 / 8640
    })

    setName(fd.get("name"))
  }

  const saveWithServer = async (event) => {
    event.preventDefault()

    const fd = new FormData(event.target)

    const reponse = await fetch("http://localhost:3000/cookies", {
      method: "POST",
      body: JSON.stringify({ name: fd.get("name") }),
      headers: {
        "content-type": "application/json"
      },
      // cookie რომ გაიგზავნოს სერვეთან და ბრაუზერში დაყენდეს cross-origin მოთხოვნებისას
      credentials: "include"
    })
  }

  const saveWithSession = async (event) => {
    event.preventDefault()

    const fd = new FormData(event.target)

    const response = await fetch("http://localhost:3000/sessions", {
      method: "POST",
      body: JSON.stringify({ name: fd.get("name") }),
      headers: {
        "content-type": "application/json"
      },
      credentials: "include"
    })

    const jsonResponse = await response.json()
    setName(jsonResponse.name)
  }

  useEffect(() => {
    // backend-ს უნდა მივაკითხოთ. connect.sid cookie-ში მხოლოდ სესიის id ინახება
    // ჩვენ მომხმარებლის სახელი გვჭირდება
    fetch("http://localhost:3000/status", { credentials: "include" })
      .then((response) => response.json())
      .then((json) => {
        setName(json.name || "guest")
      })
  }, [])

  return (
    <>
      <h1>Hello, {name}</h1>
      <form onSubmit={saveWithSession} autoComplete="off">
        <input type="text" name="name" />
        <button>Set</button>
      </form>
    </>
  )
}
