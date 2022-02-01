import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import fetchApi from '../service/fetchAPI';

export default function GlobalProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [optionsColumn] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );
  const [comparisons] = useState(['maior que', 'menor que', 'igual a']);
  const [numberValue] = useState('0');

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
        filterName,
        setFilterName,
        optionsColumn,
        comparisons,
        numberValue,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
