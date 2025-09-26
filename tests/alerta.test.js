function classificarAlerta(nivel) {
  if (nivel > 80) return "Crítico";
  if (nivel > 50) return "Alto";
  return "Moderado";
}

test("alerta crítico se nível maior que 80", () => {
  expect(classificarAlerta(90)).toBe("Crítico");
});

test("alerta alto se nível entre 51 e 80", () => {
  expect(classificarAlerta(70)).toBe("Alto");
});

test("alerta moderado se nível até 50", () => {
  expect(classificarAlerta(30)).toBe("Moderado");
});
