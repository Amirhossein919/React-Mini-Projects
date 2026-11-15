import "./Sidebar.css";
import ProfileImage from "../../assets/ProfileImage.jpg"
function SidebarProfile() {
  return (
    <div className="SidebarProfile">
      <div className="Image-Container">
        <img src={ProfileImage} alt="SiteImage" className="Image" />
        <p>Shahrdari-Nemone</p>
      </div>
      <div className="Info">
        <p>Sarparast System</p>
      </div>
    </div>
  );
}
export default SidebarProfile