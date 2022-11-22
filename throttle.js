function throttle (callback, delay) {
    let lastCalledTime = 0;
    let intervalId;
    function throttleFun (...args) {
        const currentTime = Date.now();
        const delaySinceLastCall = currentTime - lastCalledTime;
        const remainingDelay = delay - delaySinceLastCall;
        if(remainingDelay <= 0) {
            lastCalledTime = currentTime;
            callback.apply(this, args);
        }
        clearTimeout(intervalId);
        intervalId = setTimeout(() => {
            lastCalledTime = Date.now();
            callback.apply(this, args)    
        }
        ,remainingDelay)
    }
    throttleFun.cancel = () => {
        clearTimeout(intervalId);
    }
    return throttleFun;
}

const saveInput = () => {
    console.log("saving data..");
}

const throttled = throttle(saveInput, 1000)