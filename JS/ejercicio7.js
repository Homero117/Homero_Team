console.log('Ejercicio 7')

function golfCode(par, Strokes) {
    if (Strokes == 1) {
        return "Hole-in-one!";        
    }
    else if (Strokes <= par - 2) {
        return "Eagle";
    } 
    else if (Strokes == par - 1){
        return "Birdie";
    }
    else if (Strokes == par) {
        return "Par";
    }
    else if (Strokes == par + 1){
        return "Bogey";
    }
    else if (Strokes == par + 2){
        return "Double Boggey";
    }
    else if (Strokes >= par + 3){
        return "Go Home";
    }
    else {
        return "Valor no válido"
    }
}
