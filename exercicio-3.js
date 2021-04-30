// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('nav ul li');

menu.forEach((item) => {
  item.classList.add('ativo');
})

console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if(index !== 0) {
  item.classList.remove('ativo');
  }
})
// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');
img.forEach((item) => {
  console.log(item, item.hasAttribute('alt'));
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');
