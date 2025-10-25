// index.js

function classificarAlerta(valor) {
  if (valor >= 90) return "Crítico";
  if (valor >= 70) return "Alto";
  if (valor >= 50) return "Médio";
  return "Baixo";
}

function enviarNotificacao(status) {
  return `Notificação enviada: ${status}`;
}

function processarAlerta(valor) {
  const status = classificarAlerta(valor);
  return enviarNotificacao(status);
}

// EXPORTS (CommonJS) — combina com require("../index") dos testes
module.exports = { classificarAlerta, enviarNotificacao, processarAlerta };
