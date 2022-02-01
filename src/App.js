import React from 'react';
import FilterByName from './components/Filters/FilterByName';
import Table from './components/Table';
import GlobalProvider from './Context/GlobalProvider';

export default function App() {
  return (
    <GlobalProvider>
      <FilterByName />
      <Table />
    </GlobalProvider>);
}
