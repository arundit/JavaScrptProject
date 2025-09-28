function helloWorld(){
    console.log("hello world");
}

helloWorld();

function greet(name){
    console.log("hello "+name)
}

function add(a,b){
    console.log(a+b);
}

function evenCheck(num){
    if(num%2===0){
        return "even";
    }
    else{
        return "odd";
    }
}

greet("Arun");
greet(2);
add(15,20);
let result=evenCheck(16);
console.log(result);