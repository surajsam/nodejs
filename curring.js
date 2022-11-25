function curry (callback) {
    return (...args) => {
        if(!args.length) {
            return callback(...args);
        }else {
            return curry(callback.bind(this, ...args));
        }
    }
}

const sum = (...numbers) =>  numbers.reduce((total, number) => { return total + number }, 0);
const func = curry(sum);
const curriedSum = func(1,2,3)(6,8,9)(4,5)();
console.log(" total curriedSum", curriedSum);