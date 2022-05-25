import drawGraph from "./darwGraph.js";
import drawInputs from "./drawInputs.js"

export default function drawSection(key) {
  
  let docFrag = document.createDocumentFragment();

  let section = document.querySelector('section');

  let h2 = document.createElement('h2');
  let canvas = document.createElement('canvas');
  let h3 = document.createElement('h3');
  let inputContainer; 

  switch (key) {
    case 0:
      h2.textContent = 'Линейная функция';
      h3.textContent = 'y = kx + b';
      inputContainer = drawInputs(['k', 'b'], key);
      break;
    case 1:
      h2.textContent = 'Квадратичная функция';
      h3.innerHTML = 'y = ax<span class="super">2</span> + bx + c';
      inputContainer = drawInputs(['a', 'b', 'c'], key);
      break;
    case 2:
      h2.textContent = 'Степенная функция';
      h3.innerHTML = 'y = x<span class="super">n</span>';
      inputContainer = drawInputs(['n'], key);
      break;
    case 3:
      h2.textContent = 'Показательная функция';
      h3.innerHTML = 'y = n<span class="super">x</span>';
      inputContainer = drawInputs(['n'], key);
      break;
    case 4:
      h2.textContent = 'Логарифическая функция';
      h3.innerHTML = 'y = log<span class="sub">a</span>x';
      inputContainer = drawInputs(['a'], key);
      break;
    case 5:
      h2.textContent = 'Синус функция';
      h3.textContent = 'y = sin(x)';
      inputContainer = drawInputs([], key);
      break;
    case 6:
      h2.textContent = 'Косинус функция';
      h3.textContent = 'y = cos(x)';
      inputContainer = drawInputs([], key);
      break;
    case 7:
      h2.textContent = 'Тангенс функция';
      h3.textContent = 'y = tg(x)';
      inputContainer = drawInputs([], key);
      break;
    case 8:
      h2.textContent = 'Котангенс функция';
      h3.textContent = 'y = ctg(x)';
      inputContainer = drawInputs([], key);
      break;
  }

  docFrag.append(h2);
  docFrag.append(canvas);
  docFrag.append(h3);
  docFrag.append(inputContainer);

  section.append(docFrag);

  drawGraph(key);

}