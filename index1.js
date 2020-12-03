document.write("<h2>Asynchronise Call</h2><br/>");
document.write("You can see working in console");


console.log("Before prepare Food");

function prepareFood(){
    setTimeout(()=>{
        console.log("Prepare Food");
    },20)
    

}

prepareFood();

console.log("After preparing Food, Dinner is ready");
