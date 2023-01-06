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
    const linksMenu = document.querySelectorAll('.link');
    const authorizationContainer = document.querySelector('.authorization')
    const currentSlideActive = authorizationContainer.querySelector('.authorization__tab-slide--active');
  
    currentSlideActive.style.height = `${currentSlideActive.scrollHeight}px`;

    linksMenu.forEach(function(link) {

      link.addEventListener('click', function(e) {
        e.preventDefault();
        authorizationContainer.classList.add('authorization--open')
        document.body.classList.add('lock');
      });

    })
    
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
    const inputValidate = formContainer.querySelector('input[name="approval"]');
    const inputCustom = inputValidate.nextElementSibling;
  
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();

      if(!inputValidate.checked) {
        inputCustom.style.outline = "3px solid tomato";
        return;
      }

      const valueEmail = inputEmail.value;
      registrationForm.innerHTML = "";
      const message = document.createElement('p');
      message.innerHTML = `Регистрация прошла успешно, на ваш Email: ${valueEmail} отправлено письмо для подтверждения адреса!`
      message.style.textAlign = "center";
      registrationForm.append(message);
      document.querySelector('#registration').style.height = "max-content";
    });
}

export {handlerTabsRegistration, openedMenuRegistration, handlerForm};