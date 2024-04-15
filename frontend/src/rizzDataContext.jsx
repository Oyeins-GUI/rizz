import { createContext } from "react"
import { useQuery } from "@tanstack/react-query"

export const RizzDataContext = createContext()

export function RizzDataProvider(props) {
   // eslint-disable-next-line react/prop-types
   const { children } = props

   const { isPending, error, data } = useQuery({
      queryKey: ["rizz-data"],
      queryFn: async () => {
         const res = await fetch("https://satscreener.com/api/getStx20sItem/rizz")
         return await res.json()
      },
      retry: 2,
   })

   return <RizzDataContext.Provider value={{ isPending, error, data }}>{children}</RizzDataContext.Provider>
}
