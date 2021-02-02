
/* Este componente helper (que sirve aislar codigo que hace una tarea que no esta relacionada con ningun componente directamente)
 hace la peticion a la API y retorna la informacion de todos los gifs */
const getFetchGifs = async (category) => {
  const limitSearch = 10;
  const url =
  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${limitSearch}&api_key=Ftmghlqr4gnpNnppyabSTr41W6NE65lJ`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((imgItem) => {
    return {
      id: imgItem.id,
      title: imgItem.title,
      url: imgItem.images?.downsized_medium.url, // El ? sirve para preguntar si cada imgItem trae esta imagen, en caso de que no, pues no explotará
    };
  });
  return gifs; // The returns is a promise, con las propiedades de los gifs que necesito
};

export default getFetchGifs;