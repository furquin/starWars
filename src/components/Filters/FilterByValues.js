import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

export default function FilterByValues() {
  const {
    optionsColumn,
    comparisons,
    filters,
    setFilters,
    numberValue,
    setNumberValue,
  } = useContext(GlobalContext);

  const handleChange = ({ target: { value, name } }) => {
    setFilters({ ...filters, [name]: value });
    setNumberValue(value);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChange }
        name="column"
      >
        {optionsColumn.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleChange }
        name="comparison"
      >
        {comparisons.map((comparison, index) => (
          <option key={ index } value={ comparison }>{comparison}</option>
        ))}
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ numberValue }
        onChange={ handleChange }
      />

      <button type="button" onClick={ handleChange }>
        Filtrar
      </button>
    </div>
  );
}
