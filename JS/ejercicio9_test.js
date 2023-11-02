console.log("Pruebas para la función montoF");

const testCases = [
  { monto: 300, expected: "No hay descuento" },
  { monto: 600, expected: 570 },  // 600 - (600 * 0.05) = 570
  { monto: 1500, expected: 1335 }, // 1500 - (1500 * 0.11) = 1335
  { monto: 8000, expected: 7200 }, // 8000 - (8000 * 0.10) = 7200
  { monto: 16000, expected: 12000 }, // 16000 - (16000 * 0.25) = 12000
];

testCases.forEach((testCase, index) => {
  const result = montoF(testCase.monto);
  const isTestPassing = result === testCase.expected;

  console.log(
    isTestPassing ? "🟢" : "❌",
    `Prueba ${index + 1}:`,
    "Resultado:", result,
    "| Esperado:", testCase.expected
  );
});
