// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const novoMenu = menu.cloneNode(true)
const copy = document.querySelector('.copy')
copy.appendChild(novoMenu)

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista')
console.log(faqLista.children[0])

// Selecione o DD referente ao primeiro DT
// const firstDT = faqLista.children[0];
// console.log(firstDT.nextElementSibling);

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
const proximoDd = primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML
