import "./Header.css"  
import HomeIcon from "@mui/icons-material/Home";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";


import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const Pages = {
    "/SearchCases": "جستجوی پرونده",
    "/ReportViews":"گزارش بازدید",
    "/Confirms":"تاییدات مسول شهرسازی",
    "/Podcasts": "تاییدات معاون شهرداری",
    "/Podcasts2":"تاییدات شهردار",
    "/Podcasts3":"گزارش گواهی",
    "/Podcasts4":"گزارش پروانه",
    "/Podcasts5":"گزارش دارایی",
  }

  const navigate = useNavigate()
  const location = useLocation()

  const currentPage = Pages[location.pathname || ""]

  function handleLogOut () {
    navigate("/LoginPage")
  }

  return (
    <header className="Header">
      <button className="LogOut-btn" onClick={handleLogOut}>
        <span className="LogOut-icon">
           <LogoutOutlinedIcon />
        </span>
        <span className="LogOut-text">خروج</span>
      </button>
      <nav className="Header-nav">
        <Link to="{location.pathname">
          {currentPage} / 
        </Link>
        سامانه کاربران شهرداری نمونه
        <span className="Header-nav-icon">
          <HomeIcon />
        </span> 
      </nav>
    </header>
  )
}
export default Header