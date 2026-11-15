import "./Table.css";

function Table({ search, setCurrentPage, currentPage, setTableData, tableData }) {

  const filteredData = tableData.filter((user) =>
    user.hex.toLowerCase().includes(search.toLowerCase()),
  );

  const rowsPerPage = 10;

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

  return (
    <div className="Table-Container">
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
                <button className="Accept">تایید</button>
              </td>
              <td>
                <button className="Deny" onClick={() => handleDelete(user.id)}>
                  عدم تایید
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
    </div>
  );
}

export default Table;
