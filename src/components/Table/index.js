import React, { useContext, useState } from 'react';
import './style.css';
import context from '../../Context';

function Table() {
  const { data } = useContext(context);
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
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            && data
              .filter((planet) => planet.name.includes(name))
              .map((result) => (
                <tr key={ result.name }>
                  <td>{result.name}</td>
                  <td>{result.rotation_period}</td>
                  <td>{result.orbital_period}</td>
                  <td>{result.diameter}</td>
                  <td>{result.climate}</td>
                  <td>{result.gravity}</td>
                  <td>{result.terrain}</td>
                  <td>{result.surface_water}</td>
                  <td>{result.population}</td>
                  <td>{result.films}</td>
                  <td>{result.created}</td>
                  <td>{result.edited}</td>
                  <td>{result.url}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
