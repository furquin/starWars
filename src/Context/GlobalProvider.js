import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import fetchApi from '../service/fetchAPI';

export default function GlobalProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [optionsColumn, SetOptionsColumn] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );
  const [comparisons] = useState(['maior que', 'menor que', 'igual a']);

  const dataPlanetList = async () => {
    const response = await fetchApi();
    setPlanetList(response);
  };

  useEffect(() => {
    dataPlanetList();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        planetList,
        setPlanetList,
        filterName,
        setFilterName,
        optionsColumn,
        SetOptionsColumn,
        comparisons,
        column,
        setColumn,
        value,
        setValue,
        comparison,
        setComparison,

      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
