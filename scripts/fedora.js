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
document.body.appendChild(fedoraDiv);

const selectorDiv = document.createElement("div");
selectorDiv.style.width = "250px";
selectorDiv.style.height = "250px";
selectorDiv.style.position = "absolute";
selectorDiv.style.zIndex = "9999999999999999";
fedoraDiv.appendChild(selectorDiv);



const fedoraImg = document.createElement("x-model");
const fedoraURL = chrome.extension.getURL("./../models/trilby.obj")
fedoraImg.setAttribute('src', fedoraURL);
//fedoraImg.src = "./../models/trilby.obj";
fedoraDiv.appendChild(fedoraImg);


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
        let currTrans = `translateX(${currX}px) translateY(${currY}px)`;
        let currRot = `rotateY(${currRotX}deg) rotateX(-${currRotY}deg)`;
    
        fedoraImg.style.transform = `${currTrans} ${currRot}`;
        selectorDiv.style.transform = currTrans;
        console.log(active);    
    }
});

fedoraImg.ondragstart = function(event) {
    return false;
}