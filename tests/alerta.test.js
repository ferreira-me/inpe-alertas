const { classificarAlerta } = require("../index");
// Se seu projeto for ES modules, use: import { classificarAlerta } from "../index.js";

describe("Teste unitário de classificação", () => {
  test("70 deve ser classificado como 'Alto'", () => {
    expect(classificarAlerta(70)).toBe("Alto");


  });
});
