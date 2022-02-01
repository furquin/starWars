import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

export default function FilterByValues() {
  const { optionsColumn, comparisons, numberValue } = useContext(GlobalContext);

  return (
    <div>
      <select data-testid="column-filter">
        {optionsColumn.map((option, index) => (
          <option key={ index }>{option}</option>
        ))}
      </select>

      <select data-testid="comparison-filter">
        {comparisons.map((comparison, index) => (
          <option key={ index }>{comparison}</option>
        ))}
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ numberValue }
      />

      <button
        type="button"
      >
        Filtrar

      </button>
    </div>
  );
}
