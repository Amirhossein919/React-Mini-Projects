import "./Sidebar.css"
import SidebarProfile from "./SidebarProfile.jsx"
import { MenuItems } from "./MenuItems.jsx"



function Sidebar({open}) {

  const Items =
    MenuItems.map(
      (val, key) => {
        return (
          <div className="row-container" key={key}>
            <li className="row" id={window.location.pathname === val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link; }}>
              <div className="title">{val.title}</div>
              <div className="icon">{val.icon}</div>
            </li>
          </div>
        )
      }
    )

  return (
    <div className={`Sidebar ${!open ? "expanded" : "collapsed"}`}>
      <SidebarProfile />
      <hr />
      <ul className="SidebarList">
        {Items}
      </ul>
    </div>
  )
}

export default Sidebar