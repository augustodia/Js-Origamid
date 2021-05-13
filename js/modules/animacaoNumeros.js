export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM com número em seu texto
  // Incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    const valor = +numero.innerText;
    let contador = 0;
    const incremento = valor / 100;
    const intervalo = setInterval(() => {
      contador += Math.floor(incremento);
      numero.innerText = contador;
      if (contador > valor) {
        numero.innerText = valor;
        clearInterval(intervalo);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar número para cada
  // número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quando a classe ativo é adiciona ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
