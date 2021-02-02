import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifContainerItem } from "./GifContainerItem";

/* Este componente dibuja todo el html de los contenedores de gifs, usa el GifContainerItem */

export const GifsContainer = ({ category }) => {
  // 
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
    {/* Titulo de la categoria buscada */}
      <h3 className="card animate__animated animate__fadeIn">{category}</h3>
      {/* Mensaje de Loading */}
      {loading && (
        <p className="card animate__animated animate__flash">Cargando...</p>
      )}
      {/* Contenedor de gifs que lo dibuja por cada input del usuario.
      Recorro todas las imagenes(o data) que obtengo de mi custom hook "useFetchGifs" para dibujar cada imagen*/}
      <div className="card-container">
        {/* Con {...imgItem} lo que hacemos es mandarle todas las propiedaes que hemos establecido en el "getFetchGifs" */}
        {images.map((imgItem) => (
          <GifContainerItem key={imgItem.id} {...imgItem} /> 
        ))}
      </div>
    </>
  );
};
