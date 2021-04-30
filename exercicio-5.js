// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"');
// console.log(linksInternos);

function linkAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((item) => {
    item.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((item) => {
  item.addEventListener('click', linkAtivo);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *')

function clickBody(event) {
  // console.log(event.currentTarget);
  // event.currentTarget.remove()
}

body.forEach((item) => {
  item.addEventListener('click', clickBody);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function key(event) {
  if(event.key === 't') {
    let texto = document.querySelectorAll('p');
    texto.forEach((item) => {
      item.classList.toggle('maior');
    })
  }
}

window.addEventListener('keydown', key);
