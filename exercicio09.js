//Conferência de presença - O RH quer saber se o funcionário "Amanda Souza" compareceu à reunião de alinhamento. Verifique essa informação na lista de presença.
let presenca = [
    "João Lima",
    "Carla Nunes",
    "Amanda Souza",
    "Bruno Ribeiro",
    "Fernanda Sales"
  ];

 //verificando se o elemento pedido está no array
let funcionario = "Amanda Souza"
if(presenca.includes(funcionario)){
    console.log(`o(a) funcionario(a) ${funcionario} estava presente`)
}
else{
    console.log(`o(a) funcionário(a) ${funcionario} não estava presente`)
}
console.table(presenca)