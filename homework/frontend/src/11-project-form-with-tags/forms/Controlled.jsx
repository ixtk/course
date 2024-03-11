import { useState } from "react"

export const Controlled = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    tags: [],
    dueDate: ""
  })
  const [tagText, setTagText] = useState("")

  const updateProject = (event) => {
    setProject({ ...project, [event.target.id]: event.target.value })
  }

  const updateTagText = (event) => {
    let newValue = event.target.value

    if (newValue.includes(",")) {
      newValue = newValue.slice(0, -1)

      if (project.tags.includes(newValue)) {
        return
      } else {
        setProject({
          ...project,
          tags: [...project.tags, newValue]
        })
        setTagText("")
      }
    } else {
      setTagText(event.target.value)
    }
  }

  const removeTag = (tagToRemove) => {
    const filteredTags = project.tags.filter((tag) => {
      if (tagToRemove === tag) {
        return false
      } else {
        return true
      }
    })

    setProject({ ...project, tags: filteredTags })
  }

  const saveProject = (event) => {
    event.preventDefault()
    console.log(project)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }

  const tagElements = project.tags.map((tag) => {
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
            <input
              type="text"
              id="title"
              value={project.title}
              onChange={updateProject}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              onChange={updateProject}
              value={project.description}
            />
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
            <input
              type="date"
              id="dueDate"
              value={project.dueDate}
              onChange={updateProject}
            />
          </div>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    </div>
  )
}
