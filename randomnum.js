//Math.floor(math.random()*10)+1;
//this line will give random number between 1 to 10 in consol...(firstly create .html file for this...)
let start=100;
let end=300;
function randomNmumberGenerator (start,end){
    let diff =end -start ;
    return Math.floor(Math.random()*diff)+start;
}
let ans=randomNmumberGenerator(start,end);
console.log(ans);