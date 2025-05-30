//Erro de importação - O primeiro item do carregamento chegou com defeito e precisa ser descartado. Remova-o da lista de produtos importados.
let importados = [
    "carregador portátil",
    "cabo HDMI",
    "leitor biométrico",
    "controle sem fio",
    "webcam 4K"
  ];
//removendo o primeiro elemento do array
let importadoRemovido = importados.shift()

//tabela atualizada do array
console.table(importados)
console.log(`o produto importado removido foi o(a) /${importadoRemovido}/`)