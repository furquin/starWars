import React from 'react';
import Table from './components/Table';
import GlobalProvider from './Context/GlobalProvider';

export default function App() {
  return (
    <GlobalProvider>
      <Table />
    </GlobalProvider>);
}
