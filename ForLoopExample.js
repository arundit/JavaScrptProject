let num=12;

for(let i=1;i<=10;i++){
    console.log(num*i);
}
let arrNames=["sachin","sehwag","dravid"];

//uisng for each

for(let name of arrNames){
    console.log(name);
}
//uisng alternate method

arrNames.forEach(name=>console.log(name));