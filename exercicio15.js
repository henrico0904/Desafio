//Remoção de itens inativos no menu - Dois itens do menu de navegação estão obsoletos e precisam ser removidos da posição 2 e 3, pois o sistema não oferece mais esses serviços.
let menuNavegacao = [
    "Início",
    "Serviços",
    "Portfólio",
    "Blog",
    "Contato",
    "Login",
    "Área do cliente"
  ];

//remover os elementos pedidos do array
let itensInativos = menuNavegacao.splice(1,2)
console.log(`os itens removidos por inatividade foram: ${itensInativos.join("/ ")}`);
console.table(menuNavegacao);