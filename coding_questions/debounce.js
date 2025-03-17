// implement debounce(fn,delay), which delays execution until after milliseconds have passed since the last call
function debounce(fn, delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId);//cancel the last call..
        timerId=setTimeout(()=>{
            fn(...args);
        }, delay);
    };
}
 const search =(query)=>{
    console.log(`Searching for`, query);
};

const searchWithDebounce = debounce (search,400);

searchWithDebounce('ha');
searchWithDebounce('het');
searchWithDebounce('hatt');
searchWithDebounce('hattle');
 


