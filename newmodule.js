function doSomething(){
    console.log("*****doSomething called from nodemodule.js *********")
}

function againDoSomething(){
    console.log("**** againDoSomething called from nodemodule.js******")
}

let arr= [];
function createfunc(element){
    arr.push(element);
    return arr;
}

function readfunc(){
    return arr;
}

function updatefunc(index, element){
    arr[index] = element;
    return arr;

}

function deletefunc(index){
    arr.splice(index,1);
    return arr;

}

module.exports = {
    doSomething,
    againDoSomething,
    createfunc,
    readfunc,
    updatefunc,
    deletefunc
};