import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import { Note } from "./Note"
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter(
  createRoutesFromElements(<Route path=":noteTitle" element={<Note />} />)
)

export function ProtectedText() {
  return <RouterProvider router={router} />
}
