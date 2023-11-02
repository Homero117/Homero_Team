const distanciaData = [
    [6, 8, 4, -8, 16.12],
    [9, 3, -5, 7, 14.56],
    [2, 9, 0, 7, 2.83],
    [-8, 9, 6, 8, 14.04]
]

distanciaData.forEach(element => {  
    const dTest = distancia([element[0], element[1], element[2], element[3]]);
  
    console.log(dTest == element[4] ? "🟢" : "❌", 
                dTest, " | ", 
                element[4]
                );              
});
