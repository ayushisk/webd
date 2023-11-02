const { doSomething, againDoSomething, createfunc, readfunc, updatefunc, deletefunc} = require('./newmodule.js');



console.log("Js test using node")

doSomething();
againDoSomething();

console.log(createfunc(1));
console.log(createfunc(10));

console.log(updatefunc());
console.log(readfunc());
console.log(deletefunc());





