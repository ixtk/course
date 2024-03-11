import { useState } from "react"
import "./App.css"

export const StarWarsFetch = () => {
  const [characterInput, setCharacterInput] = useState("")
  const [characterInfo, setCharacterInfo] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const searchInfoWithAsyncAwait = async (event) => {
    event.preventDefault()
    setLoading(true)
    setCharacterInput("")
    setCharacterInfo({})
    setError("")

    try {
      const characterResponse = await fetch(
        `https://swapi.dev/api/people/?search=${characterInput}`
      )

      if (!characterResponse.ok) {
        // characterResponse.status, characterResponse.statusText
        throw new Error("Something went wrong")
      }

      const characterJson = await characterResponse.json()

      if (characterJson.count === 0) {
        // or setError("Character not found")
        //    return
        throw new Error("Character not found")
      }

      const characterHomeworldPlanet = characterJson.results[0].homeworld

      const planetResponse = await fetch(characterHomeworldPlanet)
      const planetJson = await planetResponse.json()

      setCharacterInfo({
        name: characterJson.results[0].name,
        birthYear: characterJson.results[0].birth_year,
        planet: {
          name: planetJson.name,
          population: planetJson.population,
          terrain: planetJson.terrain
        }
      })
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  const searchInfoWithThen = (event) => {
    event.preventDefault()
    setLoading(true)
    setCharacterInput("")
    setCharacterInfo({})
    setError("")

    let characterDataToSave

    fetch(`https://swapi.dev/api/people/?search=${characterInput}`)
      .then((characterResponse) => {
        if (!characterResponse.ok) {
          // characterResponse.status, characterResponse.statusText
          throw new Error("Something went wrong")
        }

        return characterResponse.json()
      })
      .then((characterJson) => {
        if (characterJson.count === 0) {
          throw new Error("Character not found")
        }

        characterDataToSave = characterJson.results[0]

        const characterHomeworldPlanet = characterJson.results[0].homeworld

        return fetch(characterHomeworldPlanet)
      })
      .then((planetResponse) => planetResponse.json())
      .then((planetJson) => {
        setCharacterInfo({
          name: characterDataToSave.name,
          birthYear: characterDataToSave.birth_year,
          planet: {
            name: planetJson.name,
            population: planetJson.population,
            terrain: planetJson.terrain
          }
        })
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <form onSubmit={searchInfoWithAsyncAwait}>
        <input
          type="search"
          value={characterInput}
          onChange={(e) => setCharacterInput(e.target.value)}
        />
        <button>Search</button>
      </form>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {Object.keys(characterInfo).length > 0 && (
        <div>
          <ul>
            <li>
              <strong>Name</strong>: {characterInfo.name}
            </li>
            <li>
              <strong>Birth year</strong>: {characterInfo.birthYear}
            </li>
            <li>
              <strong>Home planet</strong>
            </li>
            <ul>
              <li>
                <strong>Name</strong>: {characterInfo.planet.name}
              </li>
              <li>
                <strong>Population</strong>: {characterInfo.planet.population}
              </li>
              <li>
                <strong>Terrain</strong>: {characterInfo.planet.terrain}
              </li>
            </ul>
          </ul>
        </div>
      )}
    </>
  )
}
