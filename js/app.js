
//Create Element, add text.
const newP = document.createElement('p');
newP.id='quantity';
newP.textContent ='Thank you!';

//Identify element, listen the event, prevent default (event)
let donateButton= document.getElementById("donate");
donateButton.addEventListener("click", function (e){
  e.preventDefault();
  //convert the value of input (string to number and remove $ character)
let inputValue = parseInt(document.getElementById('quantity').value.slice(1));

//Comparation from validate the amount
  if(inputValue >= 5) {
    // if condition is true, create element and text
    document.getElementById('empty').appendChild(newP);
  } else {
    //if condition is false, show an alert
    alert("Please, try an amount greater than 5.");
  }
});
