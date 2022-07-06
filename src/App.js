import React from "react";
import {useDispatch} from 'react-redux';
import { dataAction } from "./app/actions/dataAction";
import Table from "./components/Table/Table";
import './App.scss';

function App () {
  const dispatch = useDispatch();
  dispatch(dataAction());

  return (
    <main>
      <div className='app'>
        <h1>Тестовое задание</h1>
        <Table/>        
      </div>
    </main>
  )
};

export default App;