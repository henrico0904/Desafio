/* Ranking de vendas
Você recebeu a pontuação de vendas dos representantes 
e precisa gerar um ranking do maior para o menor antes da premiação.
*/
let vendas = [3500, 1800, 4200, 3900, 5000, 1200, 2900, 4700];
//organizando os elementos array
let vendaOrganizada = vendas.sort((a, b)=> b-a)
console.table(vendaOrganizada)