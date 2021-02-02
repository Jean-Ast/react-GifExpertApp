import{ useEffect, useState } from "react";
import  getFetchGifs  from '../helpers/getFetchGifs'


export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    // Hacer peticion y traer imagenes
    // Utilizo el helper "getFetchGifs" para traer todas las imágenes del API y cambiar el estado de las categorias
    getFetchGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]); // La categoria en este componente no cambia, significa que la petición al API solo se hará una vez


  return state; // state = {data:[], loading: true}
};
