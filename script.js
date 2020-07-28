const projectTab = document.querySelector('#projects');
const hiddenNav = document.querySelector('.dropdown-nav');
const spliterText = Array.from(document.querySelectorAll('.spliter > h1'));
const navBar = document.querySelector('.nav-bar');

const dropMenu = e => {
  e.preventDefault()
  hiddenNav.classList.toggle('hidden')
}

// const fadeText = (e) => {
//   spliterText.forEach(elem => elem.style.opacity = elem.getBoundingClientRect.top - navBar.height)
// }

const fadeText = (e) => {
  const navH = navBar.offsetHeight;
  
  spliterText.forEach(elem => {
    const elY = elem.getBoundingClientRect().top;
    console.log(elY - navH);
    elem.style.opacity = `${(elY - navH)}%`;
  })
}

window.addEventListener('scroll', fadeText);

projectTab.addEventListener('click', dropMenu);

// elements opacity should equal the boundingclientrec.top - navBar.height