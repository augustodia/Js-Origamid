export default class Modal {
  constructor(container, fechar, abrir) {
    this.containerModal = document.querySelector(container);
    this.fecharModal = document.querySelector(fechar);
    this.abrirModal = document.querySelector(abrir);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.foraModal = this.foraModal.bind(this);
  }
  
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  
  foraModal(event) {
    if(event.target === this.containerModal) {
    this.toggleModal();
    }
  }

  addEvent() {
      this.abrirModal.addEventListener('click', this.eventToggleModal);
      this.fecharModal.addEventListener('click', this.eventToggleModal);
      this.containerModal.addEventListener('click', this.foraModal);
  }

  init() {
    if(this.containerModal && this.fecharModal && this.abrirModal) {
      this.addEvent()
    }
  }
  
}

