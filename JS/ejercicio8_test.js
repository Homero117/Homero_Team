console.log("Ejercicio 8 test")

const testCases = [
  {num: 1, v: 2, expected: 200},
  {num: 2, v: 3, expected: 1000000},
  {num: 3, v: 4, expected: 25},
  {num: 4, v: 5, expected: 0},  
];

testCases.forEach((testCase, index) => {
  const result = devVal(testCase.num, testCase.v);
  const isTestPassing = result === testCase.expected;

  console.log(
    isTestPassing ? "✅" : "❌",
    `Prueba ${index + 1}:`,
    "Resultado:", result,
    "| Esperado:", testCase.expected
  );
});
