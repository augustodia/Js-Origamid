
import initAnimacaoScroll from './modules/animacaoScroll';
import ScrollSuave from './modules/scrollSuave';
import AccordionList from './modules/accordion';
import TabNav from './modules/tabNav';
import initModal from './modules/modal';
import initTooltip from './modules/tooltip'
import initDropdownMenu from './modules/dropdownMenu'
import initFuncionamento from './modules/funcionamento'
import initFetchAnimais from './modules/fetchAnimais'
import initFetchBitcoin from './modules/fetchBitcoin'
import initCountDown from './modules/coutDown'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initAnimacaoScroll();
initModal();
initTooltip();
initDropdownMenu();
initFuncionamento();
initFetchAnimais();
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

console.log(diasParaONatal.total.days)
console.log(diasParaONatal.total.hours)
console.log(diasParaONatal.total.minutes)
console.log(diasParaONatal.total.seconds)
