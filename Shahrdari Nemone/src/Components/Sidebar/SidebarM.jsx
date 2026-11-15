import { MenuItems } from "./MenuItems";
import "./SidebarM.css"

function SidebarM() {
  return (
    <div className="SidebarM">
      {MenuItems.map((val, key) => {
        return (
          <button key={key} hover={val.title} onClick={() => { window.location.pathname = val.link; }}>
            {val.icon}
          </button>
        )
      })}
    </div>
  )
}
export default SidebarM