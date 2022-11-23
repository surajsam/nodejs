function promisify (callback) {
    return function (...args) {
        return new Promise( (resolve, reject) => {
            const handleErrorAndValue = (error, value) =>  {
                if(error == null) {
                     resolve(value);
                }else {
                     reject(error);
                }
            };
            callback.apply(this, [...args, handleErrorAndValue]);
        })  
    } 
};


function adder(x, y, z, t, handleErrorAndValue) {
    const value = x + y + z+ t;
    console.log(" what is my this", this);
    if( typeof value !== 'number') {
        const error = new Error('Not a number'); 
        handleErrorAndValue(error, null);
    } else {
        handleErrorAndValue(null, value);
    }
}

const promisifyAdder =  promisify(adder);

// promisifyAdder(1, 2, 7 , 8).then(console.log).catch(console.error);
// promisifyAdder(1, "foobar",7 , 8).then(console.log).catch(console.error);
const obj = {a: 5};
obj.promisifyAdder = promisify(adder);
obj.promisifyAdder(1, 2, 7 , 8)
