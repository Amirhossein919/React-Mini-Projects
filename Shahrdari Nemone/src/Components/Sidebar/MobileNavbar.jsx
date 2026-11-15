import { MenuItems } from "./MenuItems";
import "./MobileNavbar.css"

function MobileNavbar() {
  return (
    <div className="MobileNavbar">
      {MenuItems.map((val, key) => {
        return (
          <button key={key} onClick={() => { window.location.pathname = val.link; }} title={val.title}>
            {val.icon}
          </button>
        )
      })}
    </div>
  )
}
export default MobileNavbar