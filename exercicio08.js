// Alunos transferidos - Duas alunas transferidas chegaram atrasadas e devem ser colocadas no início da lista de chamada. Os nomes são "Beatriz" e "Rafaela".
let chamada = [
    "Carlos",
    "Fernanda",
    "João",
    "Mariana",
    "Lucas",
    "Camila"
  ];

//adicionando elementos ao início do array
chamada.unshift(`Beatriz`);
chamada.unshift(`Rafaela`);

console.table(chamada)