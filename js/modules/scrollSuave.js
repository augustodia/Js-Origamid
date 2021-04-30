export default function initScrollSuave() {
  const menu = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // const topo = section.offsetTop;
    // console.log(topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }

  menu.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  })
}