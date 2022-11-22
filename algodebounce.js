function debounce (callback, delay, immediate=false) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        const shouldCallImmediately = immediate && timerId == null; 
        if(shouldCallImmediately) {
            callback.apply(this, args);
        }
        timerId = setTimeout(() => {
            if(!immediate) {
                callback.apply(this, args)
            }
            timerId = null;
        }
        , delay);
    }
}

const  add = (a , b) => {
    console.log("saving data ....");
  }

const onClickDebounce = debounce(add, 500, false);

// const onPress = () => onClickDebounce();