import React from "react";
import './cuadro.css';



function Cuadro(){

    return (
        <div className="flexBox">
            <div className="todoCuadro" >
                <div className="pared">
                    <img src="../src/assets/pared-piedra.jpg" alt="Pared"/>
                    <div className="cuadro">
                        <img src="../src/assets/virgen.png" alt="Cerro San Juan" />
                    </div>
                </div>
            </div>
            <div className="inputs">
                <div className="inputs" >
                    <div className="input-alto">
                        <input name="input-alto" type="number" placeholder="Dimension Alto" min={0}></input>
                    </div>
                    <div className="input-ancho">
                        <input name="input-ancho" type="number" placeholder="Dimension Ancho" min={0}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cuadro;