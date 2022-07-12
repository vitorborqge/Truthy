let corPersonalizada = 'Vermelho';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil); // vermelho
pois no ou ele retorna o primeiro true 

let corPersonalizada = '';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil); // azul