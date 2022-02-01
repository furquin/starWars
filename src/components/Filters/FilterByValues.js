import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

export default function FilterByValues() {
  const {
    optionsColumn,
    SetOptionsColumn,
    comparisons,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    planetList,
    setPlanetList,
  } = useContext(GlobalContext);

  //!  função consultada no repositório do Cristiano Terra https://github.com/tryber/sd-016-a-project-starwars-planets-search/pull/82/commits/d24d4a8fe8eb69e9b2de8e6159dfa2803dd6d6ec

  const filterColumn = ({ target }) => {
    setColumn(target.value);
  };

  const filterComparison = ({ target }) => {
    setComparison(target.value);
  };

  const filterValue = ({ target }) => {
    setValue(target.value);
  };

  const onClickChange = () => {
    const valuesFiltered = parseInt(value, 10);
    const planetsFiltered = planetList.filter((planet) => {
      if (comparison === 'menor que') {
        return planet[column] < valuesFiltered;
      }
      if (comparison === 'maior que') {
        return planet[column] > valuesFiltered;
      }
      return planet[column] === value;
    });

    SetOptionsColumn(optionsColumn.filter((option) => option !== column));
    setPlanetList(planetsFiltered);
  };
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ filterColumn }
        name="column"
        value={ column }
      >
        {optionsColumn.map((option, index) => (
          <option key={ index } value={ option }>
            {option}
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ filterComparison }
        name="comparison"
        value={ comparison }
      >
        {comparisons.map((comparisonOption, index) => (
          <option key={ index } value={ comparisonOption }>
            {comparisonOption}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ value }
        onChange={ filterValue }
      />

      <button type="button" onClick={ onClickChange } data-testid="button-filter">
        Filtrar
      </button>
    </div>
  );
}
