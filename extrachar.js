//Write a JavaScript function to extra unique characters from a string
//Example:str=“abcdabcdefgggh”
//ans=“abcdefgh”
let str="abcdabcdefgggh";
function getUnique(str){
    let ans="";
    for(let i=0; i< str.length;i++)
        {
            let currChar=str[i];
            if(ans.indexOf(currChar)==-1){
                ans+=currChar;
            }
            }
        return ans;
}
let result=getUnique(str);
console.log(result);