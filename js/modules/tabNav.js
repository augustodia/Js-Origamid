export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.active = 'ativo';
  }
  

  ativaNavegacao(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.active);
    })
    const direcao = this.tabContent[index].dataset.anime;

    this.tabContent[index].classList.add(this.active, direcao);
  }

  addEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => { // Não é bom passar a função direto no addEventListener
        this.ativaNavegacao(index);
      });
    });
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      this.ativaNavegacao(0);
      this.addEvent();
    }
    return this;
  }

}