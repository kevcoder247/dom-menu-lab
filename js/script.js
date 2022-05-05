// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  //Nav
const topMenuEl =  document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

  // Iterate over the entire menuLinks array and for each "link" object:
for(let i = 0; i < menuLinks.length; i++){
  const navLink = document.createElement('a');
  navLink.setAttribute(menuLinks[0].text, menuLinks[0].href)
  navLink.textContent = menuLinks[i].text;
  topMenuEl.append(navLink);
}

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add('flex-ctr');



