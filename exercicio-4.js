// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let widthImg = 0;
  imgs.forEach((item) => {
    widthImg +=  item.offsetWidth;
  })
  console.log(widthImg);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item) => {
  if((item.offsetHeight >= 48) && (item.offsetWidth >= 48)) {
    console.log('Está correto');
  } else {
    console.log('Não está correto');
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tela = window.matchMedia('(max-width: 720px)');

if(tela.matches) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
