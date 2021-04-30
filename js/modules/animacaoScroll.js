export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  function animaScroll() {
    const windowMetade = window.innerHeight * 0.6;

    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isVisible = (sectionTop - windowMetade) < 0;
      if(isVisible) {
        item.classList.add('ativo');
      } else if(item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll);
}