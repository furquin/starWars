import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import context from './Context';
import fetchApi from './service/fetchAPI';

function App() {
  const [planetList, setPlanetList] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });

  const dataPlanetList = async () => {
    const response = await fetchApi();
    setPlanetList(response);
  };

  useEffect(() => {
    dataPlanetList();
  }, [dataPlanetList]);

  const handleChange = ({ target: { value } }) => {
    setFilterName({ filterByName: { name: value } });
  };
  return (
    <context.Provider value={ { data: planetList } }>
      <input
        type="text"
        name="name-filter"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Insira o nome do planeta"
        value={ filterName.filterByName.name }
        onChange={ handleChange }
      />
      <Table />
    </context.Provider>
  );
}

export default App;
