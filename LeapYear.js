
function isLeapYear(year){
    if(year%400===0  || year%4===0 && year% 100!==0){
        return true;
    }
    else{
        return false;
    }
}

let result=isLeapYear(2012);
let res=isLeapYear(1900);
console.log(result);
console.log(res);