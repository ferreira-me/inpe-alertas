const { processarAlerta } = require("../index");

describe("Processamento completo de alerta crítico", () => {
  test("processa e envia alerta crítico", () => {
    const resultado = processarAlerta(90);
    expect(resultado).toBe("Notificação enviada: Crítico");
  });
});
