import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar.jsx";
import MobileNavbar from "../Sidebar/MobileNavbar.jsx";
import Navbar from "../Header/Navbar.jsx";
import Header from "../Header/Header.jsx";


import "./UsersPage.css";

import Table from "../Page/Table/Table.jsx";
import data from "../Page/Table/MOCK_DATA.json"

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function UsersPage() {
  const [open, setOpen] = useState(true);
  const [searchType, setSearchType] = useState("name");


  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);

  function toggleSidebar() {
    setOpen(prev => !prev);
  }

  return (
    <main className="Users">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="Layout">
        <Sidebar open={open}/>
        <section className={`Form ${!open ? "Minimal" : "Full"}`} open={open}>
          <Header/>
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
                <div className="Search-btn-Container">
                  <button className="Search-btn">
                    <span className="Search-btn-title">جستجو</span>
                    <span className="Search-btn-icon">
                      <SearchOutlinedIcon />
                    </span>
                  </button>
                </div>
              </div>
              <div className="Search-Options">
                <div className="CaseNumber">
                  <p>شماره پرونده</p>
                  <input type="radio" name="searchType" value="name" checked={searchType === "name"} onChange={(e) => setSearchType(e.target.value)} />
                </div>
                <div className="AllCases">
                  <p>کلیه پرونده ها</p>
                  <input type="radio" name="searchType" value="id" checked={searchType === "id"} onChange={(e) => setSearchType(e.target.value)} />
                </div>
              </div>
            </div>
            <hr className="hr-Form-Body" />
            <div className="Form-Body-Lower">
              <Table className="Table" search={search} currentPage={currentPage} setCurrentPage={setCurrentPage} tableData={tableData} setTableData={setTableData} />
            </div>
          </div>
        </section>        
      </div>
      <MobileNavbar/>
    </main>
  );
}
export default UsersPage;
