const num1 = parseInt(document.getElementById('num1').value);
const num2 = parseInt(document.getElementById('num2').value);
const buttonElement = document.getElementById('submit');

/*function checkNums(num1) {
    if(num1 >= 2 && num1 <= 100)
}
*/
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = range(num1.value, num2.value);


buttonElement.addEventListener("click", range);
console.log(result);
/*function findPrimes(var1, var2) {

}*/