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

const handlerTabsRegistration = function() {

  const tabButtons = document.querySelectorAll('.authorization__tabs');
  const tabSlides = document.querySelectorAll('.authorization__tab-slide');
  
  tabButtons.forEach(function(buttonTab) {
      buttonTab.addEventListener('click', function() {
          let currentItem = buttonTab;
          let tabId = currentItem.getAttribute('data-tab');
          let currentTab = document.querySelector(tabId);

          tabButtons.forEach(function(item) {
              item.classList.remove('authorization__tabs--active');
          });
  
          tabSlides.forEach(function(item) {
              item.classList.remove('authorization__tab-slide--active');
              item.style.height = '0px';
          });

          currentItem.classList.add('authorization__tabs--active');
          currentTab.classList.add('authorization__tab-slide--active');
          currentTab.style.height = `${currentTab.scrollHeight}px`

      })
  });    
}

const openedMenuRegistration = function() {
  const upgradeButton = document.querySelector('.intro__upgrade');
  const authorizationContainer = document.querySelector('.authorization')
  const currentSlideActive = authorizationContainer.querySelector('.authorization__tab-slide--active');

  currentSlideActive.style.height = `${currentSlideActive.scrollHeight}px`;
  
  upgradeButton.addEventListener('click', function(e) {
    e.preventDefault();
    authorizationContainer.classList.add('authorization--open')
    document.body.classList.add('lock');
  });

  authorizationContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('registration__link-back')) {
      authorizationContainer.classList.remove('authorization--open');
      document.body.classList.remove('lock');
    }
  });
}

const handlerForm = function() {
  const formContainer = document.querySelector('.authorization');
  const registrationForm = formContainer.querySelector('#registration-form')
  const inputEmail = registrationForm.querySelector('input[type="email"]');

  registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const valueEmail = inputEmail.value;
    registrationForm.innerHTML = "";
    const message = document.createElement('p');
    message.innerHTML = `Регистрация прошла успешно, на ваш Email: ${valueEmail} отправлено письмо для подтверждения адреса!`
    message.style.textAlign = "center";
    registrationForm.append(message);
    document.querySelector('#registration').style.height = "max-content";
  });
}

if(window.innerWidth > 1280) {
  hoverUpgrade();
}

handlerForm();
handlerMenu();
handlerTabsRegistration();
openedMenuRegistration();
