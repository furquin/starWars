import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import fetchApi from '../service/fetchAPI';

export default function GlobalProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const dataPlanetList = async () => {
    const response = await fetchApi();
    setPlanetList(response);
  };

  useEffect(() => {
    dataPlanetList();
  }, []);

  return (
    <GlobalContext.Provider value={ { data: planetList } }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
