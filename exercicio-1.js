// Retorne no console todas as imagens do site
const todasImgs = document.querySelectorAll('body img')
console.log(todasImgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgImagem)

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('a[href^="#"]')
console.log(linkInterno)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

// Selecione o último p do site
let lastPs = document.querySelectorAll('p')

/*lastPs = lastPs.length - 1;
console.log(lastPs[lastPs]); 
Dessa forma eu estava tentando acessar o índice 24 dentro do number 24.
*/

console.log(lastPs[lastPs.length - 1]);
//OU
console.log(lastPs[--lastPs.length])
