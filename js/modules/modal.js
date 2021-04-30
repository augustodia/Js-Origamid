export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  
  function foraModal(event) {
    console.log('clicou fora', event.target === this);
    if(event.target === this) {
    toggleModal(event);
    }
  }
  

  if(containerModal && fecharModal && abrirModal) {    
    abrirModal.addEventListener('click', toggleModal);
    fecharModal.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', foraModal);
  }
  
}

