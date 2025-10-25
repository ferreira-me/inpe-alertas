const { classificarAlerta, enviarNotificacao, processarAlerta } = require("../index");

describe("Integração: classificar + notificar", () => {
  test("90 gera notificação 'Crítico'", () => {
    const alerta = classificarAlerta(90);
    const msg = enviarNotificacao(alerta);
    expect(msg).toBe("Notificação enviada: Crítico");
  });

  test("processarAlerta integra as duas funções", () => {
    expect(processarAlerta(90)).toBe("Notificação enviada: Crítico");
  });
});
