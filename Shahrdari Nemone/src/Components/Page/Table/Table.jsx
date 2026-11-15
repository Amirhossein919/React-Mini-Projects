
import "./Table.css";

function Table({ search, setCurrentPage, currentPage, setTableData, tableData }) {
  // const [tableData, setTableData] = useState(data);
  // const [currentPage, setCurrentPage] = useState(1);

  const filteredData = tableData.filter((user) =>
    // user.first_name.toLowerCase().includes(search.toLowerCase()) ||
    // user.last_name.toLowerCase().includes(search.toLowerCase()) ||
    // user.id.toString().includes(search)  ||
    // user.type.toString().includes(search) ||
    user.hex.toLowerCase().includes(search.toLowerCase()),
  );

  const rowsPerPage = 5;

  const handleDelete = (id) => {
    const newData = tableData.filter((user) => user.id !== id);

    setTableData(newData);

    const newTotalPages = Math.max(1, Math.ceil(newData.length / rowsPerPage));

    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);
    }
  };

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;

  const currentRows = filteredData.slice(firstRow, lastRow);

  // const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="Table-Container">
      {/* <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => {
      setSearch(e.target.value);
      setCurrentPage(1);
      }}
      /> */}
      <table className="User-Table">
        <thead>
          <tr>
            <th>#</th>
            <th>#</th>
            <th>بازبینی پرونده</th>
            <th>Hex</th>
            <th>نوع</th>
            <th>نام خانوادگی</th>
            <th>نام</th>
            <th>شماره پرونده</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((user) => (
            <tr key={user.id}>
              <td>
                <button className="Accept">Accept</button>
              </td>
              <td>
                <button className="Deny" onClick={() => handleDelete(user.id)}>
                  Deny
                </button>
              </td>
              <td>
                <select className="Case-Filter">
                  <option value="#">انتخاب کنید</option>
                  <option value="#">#</option>
                  <option value="#">#</option>
                  <option value="#">#</option>
                </select>
              </td>
              <td>{user.hex}</td>
              <td>{user.type}</td>
              <td>{user.last_name}</td>
              <td>{user.first_name}</td>
              <td className="Id">{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="Pages-btn">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="Page-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default Table;
