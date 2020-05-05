function inRange() {

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    if(num1 < 2 || num1 > 100 || num2 < 2 || num2 > 100){
        document.getElementById('error').innerText = "Invalid input, please try again";
        document.getElementById('primes').innerText = "";
    }
    else if(num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <=100){
        createArray(num1, num2);
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

function createArray(firstInput, secondInput){
    var numArray = [];
    var smallNum = 0;
    var largeNum = 0;
    if(firstInput < secondInput){
        smallNum = firstInput
        largeNum = secondInput
    }
    else if(firstInput > secondInput){
        largeNum = firstInput
        smallNum = secondInput
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
    document.getElementById('primes').innerHTML = "There are " + numArray.length + " prime numbers";
    document.getElementById('error').innerHTML = numArray;
}





