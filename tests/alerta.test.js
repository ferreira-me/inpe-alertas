const { classificarAlerta } = require("../index");

describe("Teste unitário de classificação", () => {
  test("70 deve ser classificado como 'Alto'", () => {
    expect(classificarAlerta(70)).toBe("Crítico");

  });
});
