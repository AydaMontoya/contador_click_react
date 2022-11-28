import React from "react";
import '../style/Counter.css';



function Counter({ numClicks }){
return(
    <div className="contador">
        {numClicks}

    </div>

);
}

export default Counter;