function observerLinks() {
    const listLink = document.querySelector('.header__list');
    const links = listLink.querySelectorAll('.header__nav-link');
    const observerContainers = document.querySelectorAll('.observer-container');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {      
            let dataNameLink = entry.target.getAttribute("id");
            entry.target.classList.add('activated-container');
            links.forEach((link) => link.classList.remove('navigation__link--current'));
            listLink.querySelector(`a[data-name="#${dataNameLink}"]`).classList.add('navigation__link--current');
          }
        })
      }

    const options = {
        rootMargin: '0px 0px 75px 0px',
        threshold: 0.3,
    }

    const observer = new IntersectionObserver(callback, options);

    observerContainers.forEach((container) => observer.observe(container));
}

function observerManual() {
  const manualContainer = document.querySelector('.manual__card');

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {      
        entry.target.classList.add('manual__card--activated');
      }
    })
  }

  const options = {
      threshold: 0.5,
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(manualContainer);
}

export {observerLinks, observerManual};