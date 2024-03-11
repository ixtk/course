import { useState } from "react"

export const Uncontrolled = () => {
  const [tags, setTags] = useState([])
  const [tagText, setTagText] = useState("")

  const updateTagText = (event) => {
    let newValue = event.target.value

    if (newValue.includes(",")) {
      newValue = newValue.slice(0, -1)

      if (tags.includes(newValue)) {
        // ფუნქცია შეწყდება
        return
      } else {
        setTags([...tags, newValue])
        setTagText("")
      }
    } else {
      setTagText(event.target.value)
    }
  }

  const removeTag = (tagToRemove) => {
    const filteredTags = tags.filter((tag) => {
      if (tagToRemove === tag) {
        return false
      } else {
        return true
      }
    })

    setTags(filteredTags)
  }

  const saveProject = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    // ან
    // const jsonData = Object.fromEntries(formData.entries())
    // jsonData.tags = tags
    // console.log(jsonData)

    console.log({
      title: formData.get("title"),
      description: formData.get("description"),
      tags: tags,
      dueDate: formData.get("dueDate")
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }

  const tagElements = tags.map((tag) => {
    return (
      <li key={tag}>
        <button type="button" onClick={() => removeTag(tag)}>
          {tag}
        </button>
      </li>
    )
  })

  return (
    <div>
      <form onKeyDown={handleKeyDown} onSubmit={saveProject}>
        <fieldset>
          <legend>
            <h1>Create a project</h1>
          </legend>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              value={tagText}
              onChange={updateTagText}
            />
            <ul className="tag-list">{tagElements}</ul>
          </div>
          <div>
            <label htmlFor="dueDate">Due date</label>
            <input type="date" id="dueDate" name="dueDate" />
          </div>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    </div>
  )
}
