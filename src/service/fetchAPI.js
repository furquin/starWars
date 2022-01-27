const fetchApi = async () => {
  const response = await fetch(
    'https://swapi-trybe.herokuapp.com/api/planets/',
  )
    .then((data) => data.json())
    .then((data) => data.results)
    .then((data) => data.map((item) => {
      delete item.residents;
      return item;
    }));
  return response;
};

export default fetchApi;
