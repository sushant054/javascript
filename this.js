const student =
{
    name:"sushant",
    age:21,
    eng:95,
    math:90,
    getAvg(){
        console.log(this)
        let avg=(this.age+this.eng+this.math)/3;
        console.log(avg)
    }
}
    function getAvg(){
        console.log(this);
    }
console.log("hello");
console.log("hello");
//let a=5;
try{
    console.log(a);
}
catch
{
    console.log("cought an error...");
}
console.log("hello2");
console.log("hello2");