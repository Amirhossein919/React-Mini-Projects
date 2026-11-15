import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
function Navbar({toggleSidebar}) {
  return (
    <header className="Navbar">
        <div className="Navbar-row" onClick={toggleSidebar}>
          <p className="Navbar-title">سامانه کاربران</p>
          <MenuIcon className="Navbar-icon" />
        </div>
    </header>
  );
}
export default Navbar