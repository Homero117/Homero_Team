
const supTrianData = [
    [10, 12, 60],
    [7, 24, 84],
    [15, 9, 67.5],
    [18, 6, 54]
];

supTrianData.forEach(element => {
    const superficie = Triangulo(element[0], element[1]);

    console.log(superficie === element[2] ? "🟢" : "❌", 
        superficie, " | ", 
        element[2] 
    );              
});