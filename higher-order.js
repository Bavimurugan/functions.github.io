//higher-order function

//Take another function as a argument

function sumofadd(firstnumber,secondnumber,callback)
{
    return callback(firstnumber + secondnumber);
}

console.log('result:',sumofadd(30,40,add));

//return a function

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(5)); 

//Take another function as a argument and returns functions

function hof(parafirst, parasecond)
{
    function innerFunction(numberOne) {
        return parafirst(parasecond(numberOne));
    }

    return innerFunction;
}

const multiplyByfive = x => x*5;   
const multiplyBynine = x => x*9; 

let complexFunction = hof(multiplyByfive,multiplyBynine);
console.log(complexFunction(10)); 