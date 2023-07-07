const fs = require('fs');


const relativePath = 'string.txt';  // Se puede cambiar el archivo a cifrar *** CAMBIAR ACA SI SE DESEA PROBAR OTRO

function cifrarLetra(letra, rotacion) { // Funcion que cifra una letra
  const alfabeto = 'abcdefghijklmnñopqrstuvwxyzáéíóúü';
  const indice = alfabeto.indexOf(letra.toLowerCase());
  if (indice === -1) {
    return letra;
  }
  const indiceCifrado = (indice + rotacion) % alfabeto.length;
  const letraCifrada = alfabeto.charAt(indiceCifrado);
  return letra === letra.toUpperCase() ? letraCifrada.toUpperCase() : letraCifrada;
}

function cifrarTexto(texto, rotacion) { // Funcion que cifra un texto
  let textoCifrado = '';
  for (let i = 0; i < texto.length; i++) {
    const letra = texto.charAt(i);
    if (/^[a-zA-Zñáéíóúü]$/.test(letra)) {
      textoCifrado += cifrarLetra(letra, rotacion);
    } else {
      textoCifrado += letra;
    }
  }
  return textoCifrado;
}

function cifrarArchivo(rotacion, ruta, nombreArchivo) { // Funcion que cifra un archivo
  const datos = fs.readFileSync(`${ruta}/${nombreArchivo}`);
  const texto = datos.toString();
  const textoCifrado = cifrarTexto(texto, rotacion);
  console.log(textoCifrado);
  const nombreCifrado = nombreArchivo.replace(/\.[^/.]+$/, '') + '_cifrado' + nombreArchivo.match(/\.[^/.]+$/)[0];
  fs.writeFileSync(`${ruta}/${nombreCifrado}`, textoCifrado);
}

cifrarArchivo(1, '.', relativePath); // Se puede cambiar la rotacion y el archivo a cifrar *** CAMBIAR ACA SI SE DESEA PROBAR OTRO
