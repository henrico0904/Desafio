// Prioridade na fila - Uma emergência surgiu e dois clientes VIP precisam ser atendidos imediatamente. Adicione-os ao início da fila.
let filaAtendimento = [
    "cliente 003",
    "cliente 004",
    "cliente 005",
    "cliente 006",
    "cliente 007"
  ];

//adicionando ao início do array
filaAtendimento.unshift(`VIP 2`);
filaAtendimento.unshift(`VIP 1`);

console.table(filaAtendimento);