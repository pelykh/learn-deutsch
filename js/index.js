const scroll = new SmoothScroll('a[href*="#"]', {
  offset: () => 100,
  durationMax: 1000,
});

const nav = document.getElementById('nav');
const sticky = nav.offsetTop + 50;

const updateNavOnScroll = () => {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("nav__scrolled");
    nav.classList.remove("nav__sticky");
  } else {
    nav.classList.add("nav__sticky");
    nav.classList.remove("nav__scrolled");
  }
};

window.addEventListener('scroll', updateNavOnScroll);
