let str = "Clean World Green World";
let rev = "";


// using for loop

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}

console.log(rev);

// using while loop
let j = str.length - 1;
let reversed = "";
while (j >= 0) {
    reversed = reversed + str[j];
    j = j - 1;
}
console.log("using while loop " + reversed);


let reve = "";
let str1 = str.split("").reverse();
console.log("str spliting with double quotes " + str1)
reve = str.split("").reverse().join("");
console.log("using in built fn " + reve)