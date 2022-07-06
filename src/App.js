import React, { useState } from "react";
import Table from "./components/Table/Table";
import './App.scss'

function App () {
  const json = require('./data/test_data.json');
  const [data] = useState([...json]);

  return (
    <main>
      <div className='app'>
        <h1>Тестовое задание</h1>
        <div className='app'>
        <Table data={data}/>        
      </div>
      </div>
    </main>
  )
};

export default App;