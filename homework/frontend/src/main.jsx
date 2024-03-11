import React from "react"
import ReactDOM from "react-dom/client"
import { StarWarsFetch } from "./13-star-wars-fetch/StarWarsFetch"
// import { SecondsCountdown } from "./14-seconds-countdown/SecondsCountdown"
// import { Wiki } from "./15-wiki/Wiki"
// import { WikiRefactor } from "./16-wiki-refactor/WikiRefactor"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarWarsFetch />
    {/* <SecondsCountdownApp /> */}
    {/* <WikiApp /> */}
    {/* <WikiRefactorApp /> */}
  </React.StrictMode>
)
