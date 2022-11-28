import React from "react";

import "../style/ButtonCont.css";

function ButtonCont({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button
      className={
        esBotonDeClick ? "button-click" : "button-restart"
      } /* función para decidir si es un boton de click o de reiniciar */
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default ButtonCont; /* exportacion del elemento, sirve para exportar un elemento por función */
