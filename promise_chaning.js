//promise chaining example..
savetoDb("sushant")
.then(()=>{
    console.log(d="data1 saved");
    return savetoDb("hello world");
})
.then(()=>{
    console.log(d="data2 saved");
    return savetoDb("welcome!");
})
.catch(()=>{
    console.log("promise was rejected!");
});