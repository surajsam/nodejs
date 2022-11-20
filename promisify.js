const adder = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const promisify = (callback) => {
    return (...args) => new Promise((resolve, reject) => {
        resolve(callback(...args));
        reject(callback(...args));
    });
}

const promiseAdder = promisify(adder);
promiseAdder(4, 5).then((value) => console.log(value)).catch((err) => console.log(err));
