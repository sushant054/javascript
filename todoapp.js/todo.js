//here in this code we will see it's output in console...
let todo = [];
let req = prompt("plese enter your request");
while(true) {
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("---------------");
        // for(task of todo){
        //     console.log(task);
        // }
        for(i=0;i<todo.length;i++){
           console.log(i,todo[i]);//for delete operation
        }//we use index to delete element
        console.log("---------------");
    }
    else if(req == "add"){
        let task= prompt("plese enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
     

    else if(req == "delete"){
        let idx = prompt("plese enter the task index");
        todo.splice(idx,1);//it removes one element..
        console.log("task deleted");
    }
    else {
        console.log("wrong request!!!");
    }
 req=prompt ("plese enter your request");
}