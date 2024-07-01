const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'delta',
    password:'0115'
}) ;
//using faker
let getRandomUser= ()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
let q="INSERT INTO user (id,username,email,password) VALUES ?";
//manual insertion of data
//let users=["123","sushh","sushantnalage54@gmail.com","abc"];
//
let data= [];
for(let i=1; i<100; i++)
  {
  data.push(getRandomUser());//100 fake users data
  }
try{
  connection.query(q,[data],(err,result)=>{
    if(err) throw err;
    console.log(result);
    //console.log(result.length);
  });
}catch(err){
console.log(err);
}
connection.end();
 

//console.log(createRandomUser());