//without arguments and without return type
function firstday()
{
    console.log('first day of class is functions');
}
//with arguments and without return type

function firstday(class)
{
    console.log(`first  ${class}! day of class i functions`);
}
//with arguments and with return type

function add(firstnumber,secondnumber)
{
    return firstnumber + secondnumber;
}
let result=add(25,30);
console.log('result',result);

//without arguments and with return type

function subject()
{
    return 'javascript';
}
let result = subject()
console.log(subject);