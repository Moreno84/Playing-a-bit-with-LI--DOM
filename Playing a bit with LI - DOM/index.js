// creates an ordered list with five items. program that
// clicking on the first one changes its color and text to green

function changeColorGreen(){
    let li=document.getElementById("colorGreen");
    li.style.color="green";
}


// Clicking on the second changes its background color to yellow

function changeBackgroundColorYellow(){
    let li=document.getElementById("backgroundColorYellow");
    li.style.backgroundColor="yellow";
}
// when clicking on the third one change the last LI element for the first one 
function swipeUltimoPrimero(){
    let li=document.getElementById("swipeUltimoPrimero");
    let parent = li.parentNode;
    let ultimo=parent.lastElementChild;
    let primero=parent.firstChild;

    parent.insertBefore(ultimo,primero); //we put the last one in front of the first one
    parent.append(primero);//we put the first one last

}

// Clicking on the fourth changes the background color of all to blue
function todosLiAzul(){
    let li=document.getElementById("todosLiAzul");
    let parent = li.parentNode;
    let lis= parent.children; 
    //we access all element-type nodes
    //we will run them to change the colors of all the li to blue
    for(let k=0; k<lis.length;k++){
        lis[k].style.color="blue";
    }
    
}

// Clicking on the fifth deletes it.
function removeMe(){
    let li=document.getElementById("removeMe");
    let parent = li.parentNode;
    parent.removeChild(li);
}


// Clicking on the sixth deletes the previous sibling element
function hermanoAnterior(){
    let li=document.getElementById("hermanoAnterior");
    let parent = li.parentNode;
    let anterior = li.previousElementSibling;
    parent.removeChild(anterior);
}

// When clicking on the seventh, another LI is added with the text "NEW LI" and a red background color;
function addLi(){
    let li=document.getElementById("addLi");
    let parent = li.parentNode;

    let newLI = document.createElement("LI");
    newLI.innerHTML="NUEVO LI";
    newLI.style.backgroundColor="red";
    parent.appendChild(newLI);
    
}
