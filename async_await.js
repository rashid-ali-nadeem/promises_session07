document.write("<h2><u>Async & Await</u> with Promises</h2><br/>");
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

async function startProcess(){
    let foodValue = await prepareFood();
    console.log(foodValue);
    let frenchToastValue = await prepareFrenchToaste();
    console.log(frenchToastValue);
    let coffeeValue = await prepareCoffee();
    console.log(coffeeValue);
}
startProcess();

console.log("After preparing Food, Dinner is ready");
