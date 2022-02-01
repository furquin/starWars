import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

const FilterByName = () => {
  const { filterName, setFilterName } = useContext(GlobalContext);
  const { name } = filterName.filterByName;

  const handleChange = ({ target: { value } }) => {
    setFilterName({ filterByName: { name: value } });
  };

  return (
    <input
      type="text"
      name="name-filter"
      id="name-filter"
      data-testid="name-filter"
      placeholder="Insira o nome do planeta"
      value={ name }
      onChange={ handleChange }
    />
  );
};

export default FilterByName;
