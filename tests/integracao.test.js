const { classificarAlerta, enviarNotificacao } = require("../index");

describe("Integração: classificar + notificar", () => {
  test("90 gera notificação 'Crítico'", () => {
    const alerta = classificarAlerta(90);
    const resultado = enviarNotificacao(alerta);
    expect(resultado).toBe("Notificação enviada: Crítico");
  });
});
