export default function initAccordionList() {
  const accordion = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion(item) {
    item.nextElementSibling.classList.toggle('ativo');
    item.classList.toggle('ativo');
  }

  if (accordion) {
    accordion.forEach((item) => {
      item.addEventListener('click', () => {
        activeAccordion(item);
      });
    });
  }
}
