export default class Tooltip {

  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    
    // Bind do objeto da classe aos callbacks;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarTolltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    // Cria a tooltipbox e coloca em uma propriedade
    this.criarTolltipBox(currentTarget);
    console.log(currentTarget);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if(this.tooltips.length) {
      this.addTooltipsEvent();
      
    }
    return this;
  }
  
  
}
