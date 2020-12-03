document.write("<h2>CallBack</h2><br/>");
document.write("You can see working in console");

console.log("Before prepare Food");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare Food");
        callback("Food is ready");
    },10)
}
function prepareFrenchToaste(callback){
    setTimeout(()=>{
        console.log("Prepare French Toast");
        callback("French Toast is ready");
    },20)
}
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is ready");
    },30)
}
function foodcallback(value){
    console.log(value);
    prepareFrenchToaste(frenchtoastcallback);

}
function frenchtoastcallback(value){
    console.log(value);
    prepareCoffee(coffeecallback);
}
function coffeecallback(value){
    console.log(value);
}

prepareFood(foodcallback);

console.log("After preparing Food, Dinner is ready");
