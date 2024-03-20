import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Form, Modal, Container } from "react-bootstrap"
import axios from "axios"

export const Note = () => {
  const { noteTitle } = useParams()
  const [note, setNote] = useState("")
  const [password, setPassword] = useState("")
  const [showModal, setShowModal] = useState(true)
  const [noteExists, setNoteExists] = useState(null)
  const [status, setStatus] = useState("")

  const createNote = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:3000/note", {
        text: note,
        password,
        title: noteTitle.toLowerCase()
      })
    } catch (error) {
      setStatus(error.response.data.message)
    }
  }

  const getNote = async (event) => {
    event.preventDefault()
    if (!noteExists) {
      setShowModal(false)
      return
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/note/${noteTitle.toLowerCase()}`,
        { password }
      )
      setNote(response.data.text)
      setShowModal(false)
    } catch (error) {
      setStatus(error.response.data.message)
      setPassword("")
    }
  }

  useEffect(() => {
    const checkNoteExists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/note-status/${noteTitle.toLowerCase()}`
        )
        setNoteExists(response.data.noteExists)
      } catch (error) {
        setStatus(error.response.data.message)
      }
    }

    checkNoteExists()
  }, [noteTitle])

  return (
    <Container>
      <header className="my-4 d-flex justify-content-between">
        <h1 className="fs-4">🔐 Protected Text</h1>
      </header>
      <main>
        <>
          <Modal show={showModal} size="sm">
            <form onSubmit={getNote}>
              <Modal.Header>
                <Modal.Title>
                  <h2 className="mb-0">
                    {noteExists
                      ? "Password required"
                      : `Create new site? ${noteTitle.toLowerCase()}`}
                  </h2>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  {noteExists
                    ? "This site (this URL) is already occupied."
                    : "Great! This site doesn't exist, it can be yours!"}
                </p>
                <Form.Label htmlFor="password">
                  {noteExists ? "Password" : "New password"}
                </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="passowrd"
                />
              </Modal.Body>
              <Modal.Footer>
                <p className="small">{status}</p>
                {noteExists ? (
                  <Button variant="primary" size="sm" type="submit">
                    Check
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Create
                  </Button>
                )}
              </Modal.Footer>
            </form>
          </Modal>
          <form onSubmit={createNote}>
            <Form.Control
              value={note}
              onChange={(e) => setNote(e.target.value)}
              name="note"
              as="textarea"
              id="note"
              cols="30"
              rows="10"
              placeholder="Your text goes here..."
            />
            <Button className="mt-2 d-block ms-auto" type="submit">
              Save
            </Button>
          </form>
        </>
      </main>
    </Container>
  )
}
