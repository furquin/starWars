import React from 'react';
import FilterByName from './components/Filters/FilterByName';
import FilterByValues from './components/Filters/FilterByValues';
import Table from './components/Table';
import GlobalProvider from './Context/GlobalProvider';

export default function App() {
  return (
    <GlobalProvider>

      <FilterByName />
      <FilterByValues />
      <Table />
    </GlobalProvider>);
}
