import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => { // Con { setCategories } desestructuramos las props que se le mandan al componente
  const [inputValue, setinputValue] = useState("");
  
  // Captura el input del usuario, metodo que se manda como referencia a la propiedad onChange del input
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  // Se lanza cada vez que el usuario presione enter
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (inputValue.trim().length > 2) {
      setCategories((cate) => [inputValue, ...cate]); // Le mandamos el input del usuario al setCategories para que cambie el estado de las categories
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Coloque el Gif que desea buscar aquí"
        autoFocus
      />
    </form>
  );
};

AddCategory.propTypes = {
  // Defino setCategories como propiedad requerida al utilizar el método AddCategory
  setCategories: PropTypes.func.isRequired,
};
