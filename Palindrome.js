let str="malayalam";
str=str.trim();
let rev="";
for(let i =str.length-1;i>=0;i--){
    rev=rev+str[i];
}

if(rev===str){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}

console.log("---------using single line of code----------");

str="madam";
let reversed=str.split("").reverse().join("");
if(reversed===str){
    console.log("the given string "+str+" is palindrome")
}