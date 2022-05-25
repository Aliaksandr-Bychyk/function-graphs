import drawSection from "./drawSection";

export default function navigationButtons() {
  
  let navButtons = document.querySelectorAll('.nav-item');
  let section = document.querySelector('section');

  navButtons.forEach((button, key) => {
    button.addEventListener('click', () => {
      navButtons.forEach(el => el.classList.remove('--selected'));
      button.classList.add('--selected');
      section.innerHTML = '';
      drawSection(key);
    });
  })

}