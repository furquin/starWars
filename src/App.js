import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import context from './Context';
import fetchApi from './service/fetchAPI';

function App() {
  const [planetList, setPlanetList] = useState([]);

  const dataPlanetList = async () => {
    const response = await fetchApi();
    setPlanetList(response);
  };
  useEffect(() => {
    dataPlanetList();
  }, [dataPlanetList]);

  return (
    <context.Provider value={ { data: planetList } }>
      <Table />
    </context.Provider>
  );
}

export default App;
