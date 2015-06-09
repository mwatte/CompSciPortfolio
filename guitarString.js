/**
* Created with Week 5 Project.
* User: NinjaKitten
* Date: 2015-03-10
* Time: 07:01 PM
* To change this template use Tools | Templates.
*/
//sliders
var sliderE1 = document.getElementById("sliderE1");
var sliderB = document.getElementById("sliderB");
var sliderG = document.getElementById("sliderG");
var sliderD = document.getElementById("sliderD");
var sliderA = document.getElementById("sliderA");
var sliderE2 = document.getElementById("sliderE2");

//sliderclick
var sliderE1Click = false;
var sliderBClick = false;
var sliderGClick = false;
var sliderDClick = false;
var sliderAClick = false;
var sliderE2Click = false;

//strings
var stringE1 = document.getElementById("stringE1");
var stringB = document.getElementById("stringB");
var stringG = document.getElementById("stringG");
var stringD = document.getElementById("stringD");
var stringA = document.getElementById("stringA");
var stringE2 = document.getElementById("stringE2");

//stringclick
var stringE1Click = false;
var stringBClick = false;
var stringGClick = false;
var stringDClick = false;
var stringAClick = false;
var stringE2Click = false;

//frets
var fret1 = document.getElementById("fret1");
var fret2 = document.getElementById("fret2");
var fret3 = document.getElementById("fret3");
var fret4 = document.getElementById("fret4");
var fret5 = document.getElementById("fret5");

//mouseposition
var mouseX;

//sliderposition
var sliderE1Pos = parseInt(window.getComputedStyle(sliderE1).left);
var sliderBPos = parseInt(window.getComputedStyle(sliderB).left);
var sliderGPos = parseInt(window.getComputedStyle(sliderG).left);
var sliderDPos = parseInt(window.getComputedStyle(sliderD).left);
var sliderAPos = parseInt(window.getComputedStyle(sliderA).left);
var sliderE2Pos = parseInt(window.getComputedStyle(sliderE2).left);

//fretposition
var fret1pos = parseInt(window.getComputedStyle(fret1).left);
var fret2pos = parseInt(window.getComputedStyle(fret2).left);
var fret3pos = parseInt(window.getComputedStyle(fret3).left);
var fret4pos = parseInt(window.getComputedStyle(fret4).left);
var fret5pos = parseInt(window.getComputedStyle(fret5).left);

var context;





/*Events for first string*/
//click!
stringE1.addEventListener("mousedown", function(){
    sliderE1Pos = parseInt(window.getComputedStyle(sliderE1).left);
    stringE1Click = true;
    stringE1.style.backgroundColor = "darkorchid";
    playSound();
});
stringE1.addEventListener("mouseup", function(){
    stringE1Click = false;
    stringE1.style.backgroundColor = "purple";
});

/*Events for first slider*/
//clickability
sliderE1.addEventListener("mousedown", function(){
    sliderE1Click = true;
    sliderE1.style.backgroundColor = "lightsteelblue";
});
sliderE1.addEventListener("mouseup", function(){
    sliderE1Click = false;
    sliderE1.style.backgroundColor = "white";
});

//sliding effect
window.addEventListener("mousemove", function(evt) {
    mouseX = evt.pageX;
    if(sliderE1Click === true) {
        sliderE1.style.left = mouseX - 10 + "px";
    }
    else if (sliderE1.style.left < 0.5 + "em") {
        sliderE1.style.left = 0.5 + "em";
    }
});


/*Events for second string*/
//click!
stringB.addEventListener("mousedown", function(){
    sliderBPos = parseInt(window.getComputedStyle(sliderB).left);
    stringBClick = true;
    stringB.style.backgroundColor = "royalblue";
    playSound();
});
stringB.addEventListener("mouseup", function(){
    stringBClick = false;
    stringB.style.backgroundColor = "blue";
});

/*Events for second slider*/
//clickability
sliderB.addEventListener("mousedown", function(){
    sliderBClick = true;
    sliderB.style.backgroundColor = "lightsteelblue";
});
sliderB.addEventListener("mouseup", function(){
    sliderBClick = false;
    sliderB.style.backgroundColor = "white";
});

//sliding effect
window.addEventListener("mousemove", function(evt) {
    mouseX = evt.pageX;
    if(sliderBClick === true) {
        sliderB.style.left = mouseX - 10 + "px";
    }
    else if (sliderB.style.left < 0.5 + "em") {
        sliderB.style.left = 0.5 + "em";
    }
});


/*Events for third string*/
//click!
stringG.addEventListener("mousedown", function(){
    sliderGPos = parseInt(window.getComputedStyle(sliderG).left);
    stringGClick = true;
    stringG.style.backgroundColor = "springgreen";
    playSound();
});
stringG.addEventListener("mouseup", function(){
    stringGClick = false;
    stringG.style.backgroundColor = "lime";
});

/*Events for third slider*/
//clickability
sliderG.addEventListener("mousedown", function(){
    sliderGClick = true;
    sliderG.style.backgroundColor = "lightsteelblue";
});
sliderG.addEventListener("mouseup", function(){
    sliderGClick = false;
    sliderG.style.backgroundColor = "white";
});

//sliding effect
window.addEventListener("mousemove", function(evt) {
    mouseX = evt.pageX;
    if(sliderGClick === true) {
        sliderG.style.left = mouseX - 10 + "px";
    }
    else if (sliderE1.style.left < 0.5 + "em") {
        sliderG.style.left = 0.5 + "em";
    }
});


/*Events for fourth string*/
//click!
stringD.addEventListener("mousedown", function(){
    sliderDPos = parseInt(window.getComputedStyle(sliderD).left);
    stringDClick = true;
    stringD.style.backgroundColor = "#FAFA70";
    playSound();
});
stringD.addEventListener("mouseup", function(){
    stringDClick = false;
    stringD.style.backgroundColor = "yellow";
});

/*Events for fourth slider*/
//clickability
sliderD.addEventListener("mousedown", function(){
    sliderDClick = true;
    sliderD.style.backgroundColor = "lightsteelblue";
});
sliderD.addEventListener("mouseup", function(){
    sliderDClick = false;
    sliderD.style.backgroundColor = "white";
});

//sliding effect
window.addEventListener("mousemove", function(evt) {
    mouseX = evt.pageX;
    if(sliderDClick === true) {
        sliderD.style.left = mouseX - 10 + "px";
    }
    else if (sliderD.style.left < 0.5 + "em") {
        sliderD.style.left = 0.5 + "em";
    }
});


/*Events for fifth string*/
//click!
stringA.addEventListener("mousedown", function(){
    sliderAPos = parseInt(window.getComputedStyle(sliderA).left);
    stringAClick = true;
    stringA.style.backgroundColor = "#FFC622";
    playSound();
});
stringA.addEventListener("mouseup", function(){
    stringAClick = false;
    stringA.style.backgroundColor = "darkorange";
});

/*Event for fifth slider*/
//clickability
sliderA.addEventListener("mousedown", function(){
    sliderAClick = true;
    sliderA.style.backgroundColor = "lightsteelblue";
});
sliderA.addEventListener("mouseup", function(){
    sliderAClick = false;
    sliderA.style.backgroundColor = "white";
});

//sliding effect
window.addEventListener("mousemove", function(evt) {
    mouseX = evt.pageX;
    if(sliderAClick === true) {
        sliderA.style.left = mouseX - 10 + "px";
    }
    else if (sliderA.style.left < 0.5 + "em") {
        sliderA.style.left = 0.5 + "em";
    }
});


/*Events for sixth string*/
//click!
stringE2.addEventListener("mousedown", function(){
    sliderE2Pos = parseInt(window.getComputedStyle(sliderE2).left);
    stringE2Click = true;
    stringE2.style.backgroundColor = "crimson";
    playSound();
});
stringE2.addEventListener("mouseup", function(){
    stringE2Click = false;
    stringE2.style.backgroundColor = "red";
});

/*Event for sixth slider*/
//clickability
sliderE2.addEventListener("mousedown", function(){
    sliderE2Click = true;
    sliderE2.style.backgroundColor = "lightsteelblue";
});
sliderE2.addEventListener("mouseup", function(){
    sliderE2Click = false;
    sliderE2.style.backgroundColor = "white";
});

//sliding effect
window.addEventListener("mousemove", function(evt) {
    mouseX = evt.pageX;
    if(sliderE2Click === true) {
        sliderE2.style.left = mouseX - 10 + "px";
    }
    else if (sliderE2.style.left < 0.5 + "em") {
        sliderE2.style.left = 0.5 + "em";
    }
});


//actual guitar sounds
function playSound() {
    switch (soundFile) {
        case sliderE1Pos <= fret1pos && stringE1Click === true:
            
        		break;
        case sliderE1Pos > fret1pos && sliderE1Pos <= fret2pos && stringE1Click === true:   
            
        		break;
        case sliderE1Pos > fret2pos && sliderE1Pos <= fret3pos && stringE1Click === true:
            
        		break;
        case sliderE1Pos > fret3pos && sliderE1Pos <= fret4pos && stringE1Click === true:
            
        		break;
        case sliderE1Pos > fret4pos && sliderE1Pos <= fret5pos && stringE1Click === true:
            
        		break;
        case sliderE1Pos > fret5pos && sliderE1Pos <= 1310 && stringE1Click === true:
            
        		break;
        case sliderBPos <= fret1pos && stringBClick === true:
            
       			break;
        case sliderBPos > fret1pos && sliderBPos <= fret2pos && stringBClick === true:   
            
        		break;
        case sliderBPos > fret2pos && sliderBPos <= fret3pos && stringBClick === true:
            
        		break;
        case sliderBPos > fret3pos && sliderBPos <= fret4pos && stringBClick === true:
            
       			break;
        case sliderBPos > fret4pos && sliderBPos <= fret5pos && stringBClick === true:
            
       			break;
        case sliderBPos > fret5pos && sliderBPos <= 1310 && stringBClick === true:
            
        		break;
        case sliderGPos <= fret1pos && stringE1Click === true:
            
        		break;
        case sliderGPos > fret1pos && sliderGPos <= fret2pos && stringGClick === true:   
            
        		break;
        case sliderGPos > fret2pos && sliderGPos <= fret3pos && stringGClick === true:
            
        		break;
        case sliderGPos > fret3pos && sliderGPos <= fret4pos && stringGClick === true:
            
        		break;
        case sliderGPos > fret4pos && sliderGPos <= fret5pos && stringGClick === true:
            
        		break;
        case sliderGPos > fret5pos && sliderGPos <= 1310 && stringGClick === true:
            
        		break;
        case sliderDPos <= fret1pos && stringDClick === true:
            
        		break;
        case sliderDPos > fret1pos && sliderDPos <= fret2pos && stringDClick === true:   
            
        		break;
        case sliderDPos > fret2pos && sliderDPos <= fret3pos && stringDClick === true:
            
        		break;
        case sliderDPos > fret3pos && sliderDPos <= fret4pos && stringDClick === true:
            
        		break;
        case sliderDPos > fret4pos && sliderDPos <= fret5pos && stringDClick === true:
            
        		break;
        case sliderDPos > fret5pos && sliderDPos <= 1310 && stringDClick === true:
            
        		break;
        case sliderAPos <= fret1pos && stringAClick === true:
            
        		break;
        case sliderAPos > fret1pos && sliderAPos <= fret2pos && stringAClick === true:   
            
        		break;
        case sliderAPos > fret2pos && sliderAPos <= fret3pos && stringAClick === true:
            
        		break;
        case sliderAPos > fret3pos && sliderAPos <= fret4pos && stringAClick === true:
            
        		break;
        case sliderAPos > fret4pos && sliderAPos <= fret5pos && stringAClick === true:
            
        		break;
        case sliderAPos > fret5pos && sliderAPos <= 1310 && stringAClick === true:
            
        		break;
        case sliderE2Pos <= fret1pos && stringE1Click === true:
            
        		break;
        case sliderE2Pos > fret1pos && sliderE2Pos <= fret2pos && stringE2Click === true:   
            
        		break;
        case sliderE2Pos > fret2pos && sliderE2Pos <= fret3pos && stringE2Click === true:
            
        		break;
        case sliderE2Pos > fret3pos && sliderE2Pos <= fret4pos && stringE2Click === true:
            
        		break;
        case sliderE2Pos > fret4pos && sliderE2Pos <= fret5pos && stringE2Click === true:
            
        		break;
        case sliderE2Pos > fret5pos && sliderE2Pos <= 1310 && stringE2Click === true:
        		
        		break;
    }
}