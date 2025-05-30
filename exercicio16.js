//Substituição de matérias na grade - A escola decidiu substituir as disciplinas “Biologia” e “Física” da matriz atual por “Programação” e “Robótica”. Ambas estão na posição 3 e 4 da grade. Faça essa troca.
let gradeCurricular = [
    "Matemática",
    "Português",
    "Biologia",
    "Física",
    "História",
    "Educação Física",
    "Inglês"
  ];
//remover e subistituir os elementos no array
let materiasRemovidas = gradeCurricular.splice(2,2)
console.log(`as matérias removidas foram ${materiasRemovidas}`);

//subistituir os elementos removidos no array
let subistituirProgramacao = gradeCurricular.splice(2,0, "Programação")
let subistituirRobotica = gradeCurricular.splice(3,0, "Robótica")
console.log(gradeCurricular)
