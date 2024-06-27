//Factory function
function PersonMaker(name, age){
    const person ={
        name: name,
        age: age,
        talk(){
            console.log(`hi,my name is ${this.name}`);
        },
    };
    return person;
}
let p1=PersonMaker("sushh",25);
let p2=PersonMaker("sonu",25);
