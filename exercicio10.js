// Verificação de produto em estoque - Um cliente ligou perguntando se a loja ainda tem "cadeira gamer" disponível. Confira na lista de estoque.
let estoque = [
    "mesa para PC",
    "cadeira gamer",
    "monitor 27 polegadas",
    "hub USB",
    "mouse sem fio"
  ];
//verifica se o elemento pedido está no array
if(estoque.includes("cadeira gamer")){
    console.log("o produto está disponível")
}  
else{
    console.log("o produto não está disponível no momento")
}
console.table(estoque);