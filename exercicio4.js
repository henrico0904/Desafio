//Cancelamento de última inscrição - Remova a última inscrição da lista 
let inscritos = [
    "Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"
  ];

//removendo o ultimo elemento do array
let inscricaoRemovida = inscritos.pop()

//tabela atualizada de inscrição
console.table(inscritos);
console.log(`a inscrição removida foi a do(a) ${inscricaoRemovida}`);