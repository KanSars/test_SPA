import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import './tableFooter.scss'

const TableFooter = ({ range, setPage, rowsPerPage, page, setRowsPerPage, data }) => {
  const [isActivePrevious, setIsActivePrevious] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  function getPreviousPage(page) {
    return page === 1 ? 1 : --page;
  }

  function getNextPage(page, range) {
    return page === range.length ? page : ++page;
  }

  function getNumberOfNoteFirstRow(page, rowsPerPage) {
    return `${page * rowsPerPage - rowsPerPage + 1}`
  }

  function getNumberOfNoteLastRow(page, rowsPerPage, range) {
    return (page * rowsPerPage >= data.length) ? `${data.length}` : `${page * rowsPerPage}`;
  }

  useEffect(() => {
    if (rowsPerPage >= data.length) {
      setIsActivePrevious(false);
      setIsActiveNext(false);
    } else {
      (page === 1) ? setIsActivePrevious(false) : setIsActivePrevious(true);
      (page === data.length / rowsPerPage) ? setIsActiveNext(false) : setIsActiveNext(true);
    }
  }, [page, rowsPerPage]);

  return (
    <div className="tableFooter">
      <div>записи {getNumberOfNoteFirstRow(page, rowsPerPage)}-{getNumberOfNoteLastRow(page, rowsPerPage, range)}</div>
      <div className="pagination">
        <button className={`button ${isActivePrevious ? 'active' : 'inactive'}`} onClick={() => setPage(1)}> &#60;&#60; </button>
        <button className={`button ${isActivePrevious ? 'active' : 'inactive'}`} onClick={() => setPage(getPreviousPage(page))}> &#60; </button>
        <div className="page-number">{page}</div>
        <button className={`button ${isActiveNext ? 'active' : 'inactive'}`} onClick={() => setPage(getNextPage(page, range))}> &#62; </button>
        <button className={`button ${isActiveNext ? 'active' : 'inactive'}`} onClick={() => setPage(range.length)}> &#62;&#62; </button>
      </div>
      по
      <DropdownMenu isMultiselect={false} type="primary" iconName="period" page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} range={range} />
      записей
    </div>
  );
};

export default TableFooter;