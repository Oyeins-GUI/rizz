import "./index.css"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Burn from "./components/BurnDiv/index.jsx"
import NavBar from "./components/NavBar/index.jsx"

const queryClient = new QueryClient()

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <>
            <NavBar />
            <App />
         </>
      ),
   },
   {
      path: "/burn",
      element: (
         <>
            <NavBar />
            <div>
               <h1>My Retro Music Player</h1>
               <Burn />
            </div>
         </>
      ),
   },
])

ReactDOM.createRoot(document.getElementById("root")).render(
   <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
   </QueryClientProvider>,
)
