let num = 1008;
let i = 2;
let isPrime = true;
if (num === 1) {
    console.log("neither prime nor composite number")

}
else {

    while (num / 2 > i) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;


    }
    if (isPrime) {
        console.log("the given number " + num + " is prime");
    }
    else {
        console.log("the given number " + num + " is not prime");
    }

}



