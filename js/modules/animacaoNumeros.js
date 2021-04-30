export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
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
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
