import { useState } from "react"
import Cookie from "js-cookie"

export const Storage = () => {
  const [name, setName] = useState(Cookie.get("name") || "guest")

  const saveWithClient = (event) => {
    event.preventDefault()

    const fd = new FormData(event.target)

    Cookie.set("name", fd.get("name"), {
      expires: 1 / 8640
    })
    
    setName(fd.get("name"))
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <form onSubmit={saveWithClient} autoComplete="off">
        <input type="text" name="name" />
        <button>Set</button>
      </form>
    </>
  )
}
