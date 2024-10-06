//Named function

//without arguments and without return type
function firstday()
{
    console.log('first day of class is functions');
}
firstday();

//with arguments and without return type

function firstday(training)
{
    console.log(`first  ${training}! day of class is functions`);
}
firstday(myclass);

//with arguments and with return type

function add(firstnumber,secondnumber)
{
    return firstnumber + secondnumber;
}
let Nresult=add(25,30);
console.log('result',result);

//without arguments and with return type

function getcurrentresut()
{
    return 'javascript';
}
let result = getcurrentresult();
console.log( getcurrentresult);