var leftSide = document.getElementById("left_side");
var rightSide = document.getElementById("right_side");
var theBody = document.getElementsByTagName("body")[0];   
var pos_x = Math.floor(Math.random()*400 + 1 );
var pos_y = Math.floor(Math.random()*400 + 1 );
var numberOfFaces = 5; 

    
function generateFaces(){
    for (var i=0; i<numberOfFaces; i++){

        face = document.createElement("img");
        face.setAttribute("src", "img/smile.png");
        face.style.left = pos_x+"px";
        face.style.top = pos_y+"px";

        leftSide.appendChild(face);

        pos_x = Math.floor(Math.random()*400 + 1 );
        pos_y = Math.floor(Math.random()*400 + 1 );
    }
        
        copiedFaces = leftSide.cloneNode(true);
        copiedFaces.removeChild(copiedFaces.lastChild);
        rightSide.appendChild(copiedFaces);
    
    leftSide.lastChild.onclick = function levelup(event){
        event.stopPropagation();
        removeFaces();
        numberOfFaces += 5;
        generateFaces();
        
    }
    
    function removeFaces() {
        while (leftSide.firstChild) {
            leftSide.removeChild(leftSide.firstChild);
        }
        while (rightSide.firstChild) {
            rightSide.removeChild(rightSide.firstChild);
        }
    }            
    
    theBody.onclick = function gameOver() {
    alert("Game Over!");
    confirmed = confirm("Would you like to play again?");
    if(confirmed){
        removeFaces();
        numberOfFaces = 5;
        generateFaces();
    }
    else{
        window.close();
    }
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
    
    }; 
    
}
    
    