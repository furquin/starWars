const fetchApi = async () => {
  const response = await fetch(
    'https://swapi-trybe.herokuapp.com/api/planets/',
  )
    .then((data) => data.json())
    .then((data) => data.results);
  return response;
};

export default fetchApi;
