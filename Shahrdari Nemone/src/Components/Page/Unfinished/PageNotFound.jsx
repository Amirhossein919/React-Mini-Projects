import { Link } from "react-router-dom"


function PageNotFound() {
  return (
    <div>
      404 Not found
      <Link to="/">Userpage</Link>
    </div>
  )
}

export default PageNotFound