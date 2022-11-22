Function.prototype.myCall = function (thisContext, ...args) {
    const symbol = Symbol();
    thisContext[symbol] = this;
    thisContext[symbol](...args);
    delete thisContext[symbol];
}

Function.prototype.myApply = function (thisContext, args = []) {
    this.myCall(thisContext, ...args);
}

Function.prototype.myBind = function (thisContext, ...args) {
    return (...newArgs) => {
        this.myApply(thisContext, [...args, ...newArgs]);
    }
}


const someFun2 = function (a, b) {
    console.log(" what is this someFun2", this.a + a + b);
}

const obj = {a: 5};


// someFun2.call(obj, 1, 2);
// someFun2.apply(obj, [6, 7]);
console.log(someFun2.myCall(obj, 7, 3));
console.log(someFun2.myApply(obj, [2, 3]));
const bindFunc = someFun2.myBind(obj, 3, 3);
console.log(bindFunc(3, 3));