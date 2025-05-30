/*Histórico de navegação
A equipe de UX quer analisar o último acesso do usuário 
e os passos anteriores no sistema. Inverta a ordem do histórico para mostrar
 o mais recente no topo.
*/
let historico = [
  "login",
  "painel",
  "relatórios",
  "detalhes do cliente",
  "editar dados",
  "configurações",
  "logout"
];

let historicoReverso = historico.reverse()
console.log(historicoReverso)