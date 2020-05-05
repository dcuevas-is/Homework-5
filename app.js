const num1 = parseInt(document.getElementById('num1').value);
const num2 = parseInt(document.getElementById('num2').value);
const buttonElement = document.getElementById('submit');

function inRange() {
    if(num1 < 2 || num1 > 100 || num2 < 2 || num2 > 100){
        document.getElementById('error').innerText = "Invalid input, please try again";
        document.getElementById('primes').innerText = "";
    }
    else if(num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <=100){
        createArray(num1, num2);
    }
}

function createArray(firstInput, secondInput){
    var numArray = []
    const smallNum = 0
    const largeNum = 0
    if(firstInput < secondInput){
        firstInput = smallNum
        secondInput = largeNum
    }
    else if(firstInput > secondInput){
        firstInput = largeNum
        secondInput = smallNum
    }

    while(smallNum <= largeNum){
        if(primeNum(smallNum) == true){
            numArray.push(smallNum)
            smallNum += 1
        }
        else if(primeNum(smallNum) == false){
            smallNum += 1
        }
    }
}

function primeNum(num) {
    var result = true;
    for (var i=2; i <= Math.ceil(num/2); i++){
        if((num%i)==0){
            result = false;
            break;
        }
    }
    return result;
}

