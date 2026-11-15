import "./Sidebar.css";
import ProfileImage from "../../assets/ProfileImage.jpg"
function SidebarProfile() {
  return (
    <div className="SidebarProfile">
      <div className="Image-Container">
        <img src={ProfileImage} alt="SiteImage" className="Image" />
        <p>شهرداری نمونه</p>
      </div>
      <div className="Info">
        <p> سرپرست کل</p>
        <p>سرپرست سیستم</p>
      </div>
    </div>
  );
}
export default SidebarProfile