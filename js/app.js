

const newP = document.createElement('p');
newP.id='quantity';
newP.textContent ='nuevo texto, gracias por donar';

document.getElementById("donate").addEventListener("click", function (e){
  e.preventDefault();
let inputValue = parseInt(document.getElementById('quantity').value.slice(1));

  if(inputValue >= 5) {
    document.getElementById('empty').appendChild(newP);
  } else {
    console.log('error, no seas codinche');
  }
});

// falta darle padding a todo el recuadro
// falta el borde de todo el recuadro
// falta corregir el estilo de los ultimos botones.
