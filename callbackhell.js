console.log("Callbacks Hell");

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


prepareFood(function (value){
    console.log(value);
    prepareFrenchToaste(function (value){
        console.log(value);
        prepareCoffee(function coffeecallback(value){
            console.log(value);
        });
    });
});

console.log("After preparing Food, Dinner is ready");
