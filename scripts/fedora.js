
let currX = 0;
let currY = 0;
let currRotX = 0;
let currRotY = 0;

let mouseNum = 0;
let active = [false, false, false];


const fedoraDiv = document.createElement("div");
fedoraDiv.className = "fedora";
fedoraDiv.style.position = "absolute";
fedoraDiv.style.left = 0;
fedoraDiv.style.top = 0;
fedoraDiv.style.width = 0;
fedoraDiv.style.height = 0;
fedoraDiv.style.zIndex = "2147483647";
fedoraDiv.style.transformStyle = "preserve-3d";
document.body.appendChild(fedoraDiv);

const selectorDiv = document.createElement("div");
selectorDiv.style.width = "250px";
selectorDiv.style.height = "250px";
selectorDiv.style.position = "absolute";
selectorDiv.style.zIndex = "2147483646";
fedoraDiv.appendChild(selectorDiv);



const fedoraImg = document.createElement("x-model");
const fedoraURL = chrome.extension.getURL("./../models/trilby.obj")
fedoraImg.setAttribute('src', fedoraURL);
fedoraImg.style.zIndex = "2147483647";

fedoraDiv.appendChild(fedoraImg);

console.log(fedoraURL);


selectorDiv.addEventListener("mousedown", function (event){
    active[event.button] = true;
});

document.body.addEventListener("mouseup", function(event){
    active[event.button] = false;
});

selectorDiv.addEventListener("mouseleave", function(event){
    active[0] = false;

})

document.body.addEventListener("mousemove", function(event){
    
    if(active[0]){
            currX += event.movementX;
            currY += event.movementY;
    }  
    else if(active[1]){
            currRotX += event.movementX;
            currRotY += event.movementY;
    }

    
    if(active[0] || active[1]){
        let currTrans = `translate3D(${currX}px, ${currY}px, 100px)`;
        let currRot = `rotateY(${currRotX}deg) rotateX(-${currRotY}deg)`;
    
        fedoraImg.style.transform = `${currTrans} ${currRot}`;
        selectorDiv.style.transform = currTrans;
        console.log(active);    
    }
});

fedoraImg.ondragstart = function(event) {
    return false;
}