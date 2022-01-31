import React, { useState } from 'react';

export default function FilterByName() {
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });

  const handleChange = ({ target: { value } }) => {
    setFilterName({ filterByName: { name: value } });
  };
  const { name } = filterName.filterByName;

  return (
    <div>
      <input
        type="text"
        name="name-filter"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Insira o nome do planeta"
        value={ name }
        onChange={ handleChange }
      />
    </div>
  );
}
