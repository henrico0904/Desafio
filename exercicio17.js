//Atualização de lista de usuários - Você recebeu dois arrays com usuários de sistemas diferentes que agora estão sendo fundidos. Crie uma nova lista combinando todos os usuários.
let usuariosSistemaA = [
    "aline.souza",
    "maria.ferreira",
    "carlos.lima",
    "ana.martins"
  ];

  let usuariosSistemaB = [
    "joao.silva",
    "paulo.pereira",
    "fernanda.alves",
    "marcelo.cardoso"
  ];

//juntar as duas listas de array
console.table(usuariosSistemaA.concat(usuariosSistemaB))
