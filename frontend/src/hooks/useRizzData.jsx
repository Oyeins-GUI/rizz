import { useContext } from "react"
import { RizzDataContext } from "../rizzDataContext"

export function useRizzData() {
   return useContext(RizzDataContext)
}
