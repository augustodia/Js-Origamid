export default class ScrollSuave {
  constructor(links, options) {
    this.linkInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this) // Diz á função que o this dela é o próprio objeto.
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);

    // const topo = section.offsetTop;
    // console.log(topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }

  addLinkEvent() {
    this.linkInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if(this.linkInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
