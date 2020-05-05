const num1 = parseInt(document.getElementById('num1').value);
const num2 = parseInt(document.getElementById('num2').value);
const buttonElement = document.getElementById('submit');

function inRange() {
    if(num1 < 2 || num1 > 100 || num2 < 2 || num2 > 100){
        document.getElementById('error').innerText = "Invalid input, please try again";
        document.getElementById('primes').innerText = "";
    }
    else if(num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <=100){
        
    }
}