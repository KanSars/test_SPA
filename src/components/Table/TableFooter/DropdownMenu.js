import React, { useState } from 'react';
import './dropdownMenu.scss';

const DropdownMenu = ({ rowsPerPage, setRowsPerPage }) => {
  const list = [5, 10, 15, 20, 25]
  const [isActive, setIsActive] = useState(false); 
  const onClick = () => {
    setIsActive(!isActive);
}

  return (
    <div className='menu-container'>     
        <button onClick={onClick} className='menu-trigger' type="button">
          <div className="content-container">
              <div className={isActive ? 'actionClose' : 'actionOpen'} width='12' height='12'>{rowsPerPage}   &#9660;  </div> 
          </div>
        </button>
      <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {list.map((item) =>
            <li className="checkbox-container" key={item}>
              <button className='checkbox-button' onClick={() => setRowsPerPage(item)}> {item} </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default DropdownMenu;