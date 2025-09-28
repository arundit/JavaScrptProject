
function isLeapYear(year){
    if(year%4===0 || year % 400===0){
        return true;
    }
    else{
        return false;
    }
}

let result=isLeapYear(2025);
console.log(result)