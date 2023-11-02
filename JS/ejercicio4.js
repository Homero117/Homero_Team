console.log('Ejercicio 4');

function distancia(coordenadasArray) {
    let d = Math.sqrt((coordenadasArray[0] - coordenadasArray[2]) ** 2 + (coordenadasArray[1] - coordenadasArray[3]) ** 2);
    return d.toFixed(2);
}


