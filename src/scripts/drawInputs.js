import drawGraph from "./darwGraph.js";

export default function drawInputs(names, functionKey) {
  
  let inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  let docFrag = document.createDocumentFragment();

  if (names.length > 0) {
    names.forEach(name => {
      let div = document.createElement('div');
  
      let label = document.createElement('label');
      label.setAttribute('for', name);
      label.textContent = name;
  
      let input = document.createElement('input');
      input.classList.add('input-label');
      input.setAttribute('type', 'number');
      input.setAttribute('name', name);
      input.addEventListener('input', () => drawGraph(functionKey));
      input.setAttribute('value', 0);
      input.setAttribute('step', 0.1);
  
      div.append(label);
      div.append(input);
  
      docFrag.append(div);
    });
  }

  inputContainer.append(docFrag);

  return inputContainer;
}