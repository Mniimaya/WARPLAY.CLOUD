import {observerLinks, observerManual} from './observer-links.js';
import {handlerQuantityFilesUsers, handlerCounterSymbol, handlerSubmitForm} from './feedback-form.js';
import {handlerTabsRegistration, openedMenuRegistration, handlerForm } from './registration.js';

const headerElement = document.querySelector('.header');
const bodyElement = document.body;
const buttonOpenMenuElement = document.querySelector('.intro__menu-toggle');
const buttonCloseMenuElement = headerElement.querySelector('.header__back-menu');
const sliderIntroElement = document.querySelector('.intro__slider');

const handlerMenu = function() {
  buttonOpenMenuElement.addEventListener('click', function() {
    headerElement.classList.add('header--open');
    bodyElement.classList.add('lock');
  });

  buttonCloseMenuElement.addEventListener('click', function() {
    headerElement.classList.remove('header--open');
    bodyElement.classList.remove('lock');
  });
}

const initIntroSlider = new Swiper(sliderIntroElement, {
  slideClass: 'intro__slide',
  wrapperClass: 'intro__slider-wrapper',
  direction: 'vertical',
  loop: true,
	slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: '.intro__slider__scrollbar',
    draggable: true,
  },
});

const hoverUpgrade = function() {
  const buttonUpgradeElement = document.querySelector('.intro__upgrade');
  const overlayIntroElement = document.querySelector('.overlay');
  buttonUpgradeElement.addEventListener('mouseover', function() {
    document.querySelector('.intro__link-line').style.height = "200px"
    overlayIntroElement.style.opacity = "1";
  });

  buttonUpgradeElement.addEventListener('mouseout', function() {
    document.querySelector('.intro__link-line').style.height = "130px"
    overlayIntroElement.style.opacity = "0";
  });
}

const handlerScrollToBlock = function() {
  const linkList = document.querySelector('.header__list');
  const links = linkList.querySelectorAll('.header__nav-link');
  const menuMob = document.querySelector('.header');

  links.forEach(handlerLink);

  function handlerLink(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let dataName = this.getAttribute("data-name");

      if(window.innerWidth < 1280) {
        menuMob.classList.remove('header--open');
        document.body.classList.remove('lock');
      }

      let elem = document.querySelector(dataName);
        elem.scrollIntoView({alignToTop: "true", behavior: "smooth", block: "start", inline: "start"})
    });
  };
}







if(window.innerWidth >= 1280) {
  observerLinks();
  hoverUpgrade();
  observerManual();
}

handlerForm();
handlerMenu();
handlerTabsRegistration();
openedMenuRegistration();
handlerQuantityFilesUsers();
handlerCounterSymbol();
handlerSubmitForm();
handlerScrollToBlock(); 
