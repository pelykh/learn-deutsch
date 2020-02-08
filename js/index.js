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
window.addEventListener('load', () => {
  const mapContainer = document.getElementById('map_container');
  mapContainer.innerHTML = `
    <iframe class="after_google_map"
      src="https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%9F%D0%BB%D0%B0%D1%81%D1%82%D0%BE%D0%B2%D0%B0%2C%2031%2C%20%D0%A0%D1%96%D0%B2%D0%BD%D0%B5%2C%20%D0%A0%D0%BE%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0&t=&z=17&ie=UTF8&iwloc=&output=embed"
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0"
     ></iframe>
  `;
});
