//Último produto com defeito - Remova esse item da lista
let producao = [
    "mousepad",
    "placa de vídeo",
    "fonte de alimentação",
    "HD externo",
    "notebook gamer",
    "roteador"
  ];

//removendo o último elemento do array
let produtoRemovido = producao.pop()
console.table(producao)
console.log(`o produto removido foi o(a) ${produtoRemovido}`)