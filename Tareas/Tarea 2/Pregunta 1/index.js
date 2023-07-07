const fs = require('fs');
const planificacion = require('./planificacion.js');

const restricciones = JSON.parse(fs.readFileSync('restricciones.json', 'utf8')); // Se pueden agregar mas destinos en el archivo restricciones.json

function recibirDestino(codigo) {
    // Funcion que maneja si el destino existe o no en las restricciones
    return new Promise((resolve, reject) => {
        const objReturn = {};
        setTimeout(() => {
            const destino = restricciones.find((destino) => destino.codigo === codigo); // Busca el destino en restricciones.json
            if (destino) {
                destino.status = "Destino encontrado";
                resolve(destino);
            }
            else {
                objReturn.status = "No existe el destino en las restricciones";
                reject(objReturn);
            }
        }, 3000);
    })
}

// Funcion asyncronica que se dedica a correr el desafio
async function correrDesafio() {
    let destino;
    recibirDestino("ABC01") // Se puede cambiar el codigo de destino *** CAMBIAR ACA SI SE DESEA PROBAR OTRO
      .then((res) => {
        destino = res;
        console.log(destino.status);
        return planificacion.abrirSistemas(3300);
      })
      .then((abrirSistemas) => {
        console.log(abrirSistemas);
        return planificacion.restriccionesSanitarias(destino.restriccion, destino.codigo);
      })
      .then((restriccionesSanitarias) => {
        console.log(restriccionesSanitarias.status);
        return planificacion.emiteCertificado(destino.codigo);
      })
      .then((emiteCertificado) => {
        console.log(emiteCertificado.status);
        planificacion.cerrarSistemas();
      })
      .catch((error) => {
        console.log(error.status);
      });
  }

correrDesafio();