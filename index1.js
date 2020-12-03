console.log("Asynchronise Call");

console.log("Before prepare Food");

function prepareFood(){
    setTimeout(()=>{
        console.log("Prepare Food");
    },20)
    

}

prepareFood();

console.log("After preparing Food, Dinner is ready");
