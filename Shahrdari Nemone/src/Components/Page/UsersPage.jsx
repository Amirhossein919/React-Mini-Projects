import { useState } from "react";
import { useNavigate } from "react-router-dom";


import Sidebar from "../Sidebar/Sidebar.jsx";
import SidebarM from "../Sidebar/SidebarM.jsx";
import Navbar from "../Header/Navbar.jsx";
import "./UsersPage.css";

import Table from "../Page/Table/Table.jsx";
import data from "../Page/Table/MOCK_DATA.json"

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function UsersPage() {
  const [open, setOpen] = useState(true);
  const [searchType, setSearchType] = useState("name");


  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);

  

  const navigate = useNavigate()

  function handleLogOut () {
    navigate("/LoginPage")
  }

  function toggleSidebar() {
    setOpen(prev => !prev);
  }

  return (
    <div className="Users">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="Main">
        <div className="Form">
          <div className="Form-Header">
            <button
              className="LogOut-btn"
              onClick={handleLogOut}
            >
              <span className="LogOut-icon">
                <LogoutOutlinedIcon />
              </span>
              <span className="LogOut-text">خروج</span>
            </button>
            <div className="Page-Path">
              <div className="Path">
                <a></a>
              </div>
              /
              <div className="Homepage-Path">
                <a>
                  سامانه کاربران شهرداری نمونه
                  <HomeIcon />
                </a>
              </div>
            </div>
          </div>
          <hr className="hr-Form-Header" />
          <div className="Form-Body">
            <div className="Form-Body-Upper">
              <div className="Search-Options2">
                <div className="SearchCase-Field">
                  <input type="Search" placeholder="شماره پرونده"
                    value={search}
                    onChange={(e) => {
                    setSearch(e.target.value);
                      setCurrentPage(1)
                    }}/>
                </div>
                <button className="Search-btn">
                  <span className="Search-btn-title">جستجو</span>
                  <span className="Search-btn-icon">
                    <SearchOutlinedIcon />
                  </span>
                </button>
              </div>
              <div className="Search-Options">
                <div className="CaseNumber">
                  <p>شماره پرونده</p>
                  <input type="radio" name="searchType" value="name" checked={searchType === "name"} onChange={(e) => setSearchType(e.target.value)} />
                </div>
                <div className="AllCases">
                  <p>تمامی پرونده ها</p>
                  <input type="radio" name="searchType" value="id" checked={searchType === "id"} onChange={(e) => setSearchType(e.target.value)} />
                </div>
              </div>
            </div>
            <hr className="hr-Form-Body" />
            <div className="Form-Body-Lower">
              <Table search={search} currentPage={currentPage} setCurrentPage={setCurrentPage} tableData={tableData} setTableData={setTableData} />
            </div>
          </div>
        </div>
        <Sidebar open={open} />
        <SidebarM/>
      </div>
    </div>
  );
}
export default UsersPage;
