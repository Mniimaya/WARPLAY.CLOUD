const headerElement = document.querySelector('.header');
const bodyElement = document.querySelector('body');
const buttonOpenMenuElement = document.querySelector('.intro__menu-toggle');
const buttonCloseMenuElement = headerElement.querySelector('.header__back-menu');
const sliderIntroElement = document.querySelector('.intro__slider');

const handlerMenu = function() {
  buttonOpenMenuElement.addEventListener('click', function() {
    headerElement.classList.add('header--open');
    bodyElement.style.overflow = "hidden";
  });

  buttonCloseMenuElement.addEventListener('click', function() {
    headerElement.classList.remove('header--open');
    bodyElement.style.overflow = "visible";
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


handlerMenu();
hoverUpgrade();
