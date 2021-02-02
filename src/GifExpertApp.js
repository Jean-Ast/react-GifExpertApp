import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifsContainer } from "./components/GifsContainer";
// Este es el componente principal de la aplicación, el cual contiene la estructura de donde estarán los demás subcomponentes
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Mandamos la referencia al método setCategories para que el componente AddCategory pueda usarlo */}
      <AddCategory setCategories={setCategories} /> 
      <hr />
      <ol>
        {/* Por cada categoria creo un contenedor de Gifs */}
        {categories.map((category) => (
          <GifsContainer key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
