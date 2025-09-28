/*let num=12;
let i=1;
while(i<=10)
{
    console.log(num*i);
    i=i+1;
}

console.log("printing even numbers up to hundred")
let j=2
while(j<=100)
{
    console.log(j)
    j=j+2;
}*/

let num3=42043;
let sum=0;
while(num3>0)
{
   let rem= num3%10;
   sum=sum+rem;
   
   // num3 = parseInt(num3/10);
    num3=Math.floor(num3/10);
}

console.log(sum);
