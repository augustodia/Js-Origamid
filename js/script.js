
import initAnimacaoScroll from './modules/animacaoScroll';
import ScrollSuave from './modules/scrollSuave';
import AccordionList from './modules/accordion';
import TabNav from './modules/tabNav';
import Modal from './modules/modal';
import Tooltip from './modules/tooltip';
import initDropdownMenu from './modules/dropdownMenu'
import initFuncionamento from './modules/funcionamento'
import fetchAnimais from './modules/fetchAnimais'
import initFetchBitcoin from './modules/fetchBitcoin'
import initCountDown from './modules/coutDown'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="container"]','[data-modal="fechar"]','[data-modal="abrir"]' )
modal.init()

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();
console.log(tooltip)

initAnimacaoScroll();
initDropdownMenu();
initFuncionamento();
fetchAnimais('../../animaisApiJson.json', '.numeros-grid');
initFetchBitcoin();

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

setInterval(() => {
  const diasParaONatal = new initCountDown('26 Jul 2021 23:59:59 GMT-0300');
  days.innerText = diasParaONatal.total.days;
  hours.innerText = diasParaONatal.total.hours;
  minutes.innerText = diasParaONatal.total.minutes;
  seconds.innerText = diasParaONatal.total.seconds;
}, 1000)



// '[data-modal="container"]'
// '[data-modal="fechar"]'
// '[data-modal="abrir"]'