import React, { useContext } from 'react';
import './style.css';
import GlobalContext from '../../Context/GlobalContext';

function Table() {
  const {
    planetList,
    filterName,
  } = useContext(GlobalContext);

  const { name } = filterName.filterByName;

  const filters = (data, nameSearch) => {
    if (!data) return [];

    if (nameSearch) {
      return data.filter((planet) => planet.name.includes(nameSearch));
    }

    return data;
  };

  const arrayFilter = filters(planetList, name);

  return (
    <div>
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
          {arrayFilter.length > 0
            && arrayFilter.map((result) => (
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
