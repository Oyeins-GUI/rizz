import "./index.css"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Burn from "./components/BurnDiv/Burn.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import { RizzDataProvider } from "./context.jsx"

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
            <Burn />
         </>
      ),
   },
])

ReactDOM.createRoot(document.getElementById("root")).render(
   <QueryClientProvider client={queryClient}>
      <RizzDataProvider>
         <RouterProvider router={router} />
      </RizzDataProvider>
   </QueryClientProvider>,
)
