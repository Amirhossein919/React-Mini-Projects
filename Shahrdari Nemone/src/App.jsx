import "./App.css"

import UsersPage from "./Components/Page/UsersPage.jsx"
import SearchCases from "./Components/Page/Unfinished/SearchCases.jsx"
import ReportViews from "./Components/Page/Unfinished/ReportViews.jsx"
import Confirms from "./Components/Page/Unfinished/Confirms.jsx"

import PageNotFound from "./Components/Page/Unfinished/PageNotFound.jsx"

import LoginPage from "./Components/Page/Unfinished/Login.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersPage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/SearchCases",
      element: <SearchCases />,
      errorElement: <PageNotFound />

    },
    {
      path: "/ReportViews",
      element: <ReportViews />,
      errorElement: <PageNotFound />
    },
    {
      path: "/Confirms",
      element: <Confirms />,
      errorElement: <PageNotFound />
    },
    {
      path: "/LoginPage",
      element: <LoginPage />,
      errorElement: <PageNotFound />
    },
  ])

  return (
    
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
export default App