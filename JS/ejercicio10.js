/*
Primero declare el siguiente objeto, el cual contiene informacion acerca de algunos albums musicales, cada uno identificado con un id unico de 4 digitos. 

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


Su trabajo es programar la función "updateRecords" la cual recibe 4 argumentos(records, id, prop, value).

El comportamineto de la función debe ser el siguiente:
1. La función siempre debe regresar el objeto completo "records".
2. Si "value" es una cadena vacia, borrar la propiedad "prop" del  album cuyo id es "id".
3. Si "prop" no es "tracks" y "value" no es una cadena vacia, asignar "value" a la propiedad "prop" del album cuyo id es "id".
4. Si "prop" es "tracks", y "value" no es una cadena vacia, se debe actualizar el arreglo "tracks" del album.
  4.1. En caso de que el album no tenga la propiedad "tracks", esta se debe asignar a un arreglo vacio y después se debe añadir "value" al final del arreglo

Nota: No debes modificar el objeto "recordCollection".
*/

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    albumTitle: 'Secreto de Amor',
    artist: 'Joan Sebastian',
    tracks: ['Un Idiota', 'Me Gustas']
  },
  5439: {
    albumTitle: 'Vicente Fernandez para siempre',
    artist: 'Vicente Fernandez',
    tracks: ['Un Millon de Primaveras', 'El Chofer']
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Si el valor es una cadena vacía, borra la propiedad "prop" del album.
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // Si prop no es "tracks" y value no es una cadena vacía, asigna value a la propiedad "prop".
    records[id][prop] = value;
  } else {
    // Si prop es "tracks" y value no es una cadena vacía.
    records[id][prop] = records[id][prop] || []; // Si no existe la propiedad "tracks", crea un arreglo vacío.
    records[id][prop].push(value); // Añade "value" al final del arreglo.
  }

  return records;
}

// Ejemplo de uso:
const updatedRecords = updateRecords(recordCollection, 2548, 'tracks', 'Wanted Dead or Alive');
console.log(updatedRecords);
