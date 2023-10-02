let n=0;
let m=100;
let rand1=Math.round(Math.random()*Math.abs(n-m))+Math.min(n,m);
let rand2=Math.round(Math.random()*Math.abs(n-m))+Math.min(n,m);
console.log(rand1);
console.log(rand2)
console.log(rand1<rand2);
console.log(rand1>rand2);
console.log(rand1>=rand2);
console.log(rand1<=rand2);
console.log(rand1===rand2);
console.log(rand1!==rand2);