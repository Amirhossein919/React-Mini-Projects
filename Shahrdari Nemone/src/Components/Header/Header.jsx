import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
function Header({toggleSidebar}) {
  return (
    <div className="Header-Container">
      <header className="Header">
          <div className="Header-rowcontainer">
            <div className="Header-row" onClick={toggleSidebar}>
              <p className="Header-title">سامانه کاربران</p>
              <MenuIcon className="Header-icon" />
            </div>
          </div>
        </header>
    </div>
  );
}
export default Header