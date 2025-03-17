function throttle(fn, delay){
    let lastCall=0
    return function(...args){
        const now =Date.now();
        if(now - lastCall<delay){
            return;
        }
        lastCall = now ;
        return fn(...args);
    };
}


function sendChatMessage(message){
    console.log('Sending Message',message);
}
const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMessageWithSlowMode('Hi');
sendChatMessageWithSlowMode('Hello');
