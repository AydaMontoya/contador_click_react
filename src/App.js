import "./App.css";
import flogo from "./images/freecodecamp-logo.jpg";
import ButtonCont from "./component/ButtonCont";
import Counter from "./component/Counter";
import { useState } from "react"; // Hooks paquete, para ver los estados

import "materialize-css/dist/css/materialize.min.css"; // importar materialize

function App() {
  const [numClicks, setNumClicks] = useState(0); // set significa asignar   // useState, va a hacer el estado inicial

  const manejarClick = () => {
    // función flecha sirve para retornar lo que esta dentro de las llaves
    console.log("Click");
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
    console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenerdor">
        <img
          className="freecodecamp-logo"
          src={flogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter numClicks={numClicks} />
        <ButtonCont
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <ButtonCont
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
      <div className="materialize">
        <a class="btn-floating btn-large pulse">
          <i class="material-icons">adb</i>
        </a>
      </div>
    </div>
  );
}

export default App;
