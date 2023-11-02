console.log("ejercicio 5 test")


const cambioPagoData =[
    [100, 50, 50],
    [30, 26, 4],
    [80, 79, 1],
    [500, 450, 50]
];

cambioPagoData.forEach(element => {  
    const cambio = cambioPago(element[0], element[1]);
  
    console.log(cambio === element[2] ? "🟢" : "❌", 
              cambio, " | ", 
              element[2] 
              );              
});