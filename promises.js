document.write("<h2>Promises</h2><br/>");
document.write("You can see working in console");

console.log("Before prepare Food");

function prepareFood(){
    let promise = new Promise(function (resolve, reject){
        setTimeout(()=>{
            console.log("Prepare Food");
            resolve("Food is ready");
        },10)
    });
    return promise;
}
function prepareFrenchToaste(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is ready");
        },20)
    });
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function (resolve, reject){
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is ready");
        },30)
    });
    return promise;
}

let promise = prepareFood();
console.log("Promise is =",promise);
promise.then(function(food){
    console.log(food);
    return prepareFrenchToaste();
})
.then(function(frenchtoast){
    console.log(frenchtoast);
    return prepareCoffee();
})
.then(function(coffee){
    console.log(coffee);
})
.catch(function (error){
    console.log('the error is =',error);
})

console.log("After preparing Food, Dinner is ready");
