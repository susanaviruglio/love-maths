    /*for (i=0; i < buttons.length; i++) {
we could have used this but we won´t use it
} we are going to use an modern version syntax of it,
 what it's going  to do is go through our buttons array and return  */
document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName("button");

     for (let button of buttons){
        document.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
     }
})
function runGame(){

}

function checkAnwser(){


}

function calculateCorrectAnwser(){

}

function incrementScore(){

}

function incrementWrongAnwser(){

}

function displayAdditionQuestion(){

}

function displaySubtractionQuestion(){

}

function displayMultiplyQuestion(){

}