let str = "Hello World";
str = str.toLowerCase();
let count = 0;

for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i).toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        count++;
    }
}

console.log(count);

let ct = 0;

console.log("====using switch====");
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i).toLowerCase();
    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(ch);
            ct++;
            break;
    }
}

console.log(ct);


string = "automation";
function vowelCount(str) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i).toLowerCase();
        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                c++;
                break;

        }

    }

    return c;
   //console.log(c); // you can do like this way too 


}

let vCount=vowelCount(string);
console.log(vCount)