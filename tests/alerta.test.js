test("alerta crítico se nível maior que 80", () => {
  expect(classificarAlerta(90)).toBe("Alto"); // errado de propósito
});
