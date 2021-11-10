var imageBox1;
var imageBox2;
var imageBox3;
var imageRect;
var mainImageRect;
var mainBox = false;
var mousePosition;
var boxNr;
var isDown = false;
var offset = [0,0];
var randomPicker;

var pictureArray = [
    //PIZZA
    {
        question: "What should go on this pizza?",
        folderURL: "pizzaimgs",
        winNr: 1
    },
    //APHEX TWIN
    {
        question: "What is his logo?",
        folderURL: "apheximgs",
        winNr: 2
    },
    //TURKISK YOGHURT
    {
        question: "What country is he from?",
        folderURL: "turkimgs",
        winNr: 3
    }
]

//CREATING THE IMAGES (STARTING THE GAME)
function createImages () {
    //EMPTY THE CONTAINER
    containerBox.innerHTML = "";
    //PICK A RANDOM PART OF THE QUIZ
    randomPicker = random(pictureArray);
    //NO OVERRIDING MAINBOXES
    if(mainBox) $("#mainBox").remove();
    //CREATE THE QUESTION BOX IN THE MIDDLE WITH JQUERY
    var $mainDiv = $('<div/>').attr('id', 'mainBox');
    $mainDiv.css({
        'height' : '40%',
        'width' : '40%',
        'position' : 'absolute',
        'left' :  '50%',
        'top' :  '25%',
        'transform' : 'translate(-50%,-50%)',
        'background' : `url(${pictureArray[randomPicker].folderURL}/main.jpeg)`,
        'background-size' : '100%',
        'background-repeat' : 'no-repeat',
        'background-position' : 'center',
        'z-index' : '1'
    }).appendTo("#containerBox").html();

    //ADD THE THREE ANSWER BOXES
    for(var u = 1; u <= 3; u++) {
        var $newDiv = $('<div/>').attr('id', 'imageBox' + u);
        $newDiv.css({
            'height' : '20%',
            'width' : '20%',
            'position' : 'absolute',
            'left' : 25*u + '%',
            'top' :  '75%',
            'transform' : 'translate(-50%,-50%)',
            'background' : `url(${pictureArray[randomPicker].folderURL}/item${u}.jpeg)`,
            'background-size' : '100%',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center',
            'z-index' : '200'
        }).appendTo("#containerBox").html();
    }

    //GET ALL THE BOXES AS VARIABLES
    imageBox1 = document.getElementById("imageBox1");
    imageBox2 = document.getElementById("imageBox2");
    imageBox3 = document.getElementById("imageBox3");
    mainBox = document.getElementById("mainBox");
    textBox.innerHTML = pictureArray[randomPicker].question;
    //CREATE EVENT LISTENERS FOR THE BOXES
    createEventListeners();
}

//INIT QUIZ
function initDragnDrop () {
    createImages();
}

//CREATE AN EVENT LISTENER FOR EACH BUTTON ABLE TO ACTIVATE MOVE ON THE BOX WHEN YOU HOLD THE LEFT MOUSE BUTTON
function createEventListeners () {
    if(imageBox1) {
        imageBox1.addEventListener('mousedown', (e) => {
            //LEFT IS HELD
            isDown = true;
            //SENDING WHAT BOX WE ARE HOVERING
            checkHover = "imageBox1";
            //WHAT THE NR (ID) IS FOR THE BOX
            boxNr = 1;
            //SET THE BOX IN THE MIDDLE OF THE CURSOR
            offset = [
                imageBox1.offsetLeft - e.clientX,
                imageBox1.offsetTop - e.clientY
            ];
        }, true);
    }
    
    //LOOK AT NR 1
    if(imageBox2) {
        imageBox2.addEventListener('mousedown', (e) => {
            isDown = true;
            checkHover = "imageBox2";
            boxNr = 2;
            offset = [
                imageBox2.offsetLeft - e.clientX,
                imageBox2.offsetTop - e.clientY
            ];
        }, true);
    }
    
    //LOOK AT NR 1
    if(imageBox3) {
        imageBox3.addEventListener('mousedown', (e) => {
            isDown = true;
            checkHover = "imageBox3";
            boxNr = 3;
            offset = [
                imageBox3.offsetLeft - e.clientX,
                imageBox3.offsetTop - e.clientY
            ];
        }, true);
    }
    
}

//IF WE LET GO OF LEFT MOUSE BUTTON
document.addEventListener('mouseup', function() {
    //LEFT IS NO LONGER BEING HELD
    isDown = false;
    console.log(boxNr);
    //IF YOU HELD ONE OF THE ANSWER BOXES SEE IF THEY ARE INSIDE THE MAINBOX (QUESTIONBOX)
    if(boxNr != undefined) {
    //GET THE HELD BOX AS A RECT (TOP,LEFT,HEIGHT,WIDTH ETC)
    imageRect = document.getElementById("imageBox" + boxNr).getBoundingClientRect();
    //SAME WITH MAINBOX
    mainImageRect = mainBox.getBoundingClientRect();
    console.log(mainBox.offsetHeight);

    //IF ONE OF THE ANSWER BOXES ARE OVERLAPPING THE MAINBOX (QUESTIONBOX)
    if(imageRect.top <= mainImageRect.top + mainBox.offsetHeight &&
        imageRect.top >= mainImageRect.top &&
        imageRect.left <= mainImageRect.left + mainBox.offsetHeight &&
        imageRect.left >= mainImageRect.left) {
            //IF THE BOXNR MATCHES THE RIGHT ANSWER IN THE ARRAY
            if(boxNr == pictureArray[randomPicker].winNr){
                mainBox.style.backgroundImage = `url(${pictureArray[randomPicker].folderURL}/win.jpeg)`;
                correctAnswer();
            }
            //IF THE BOXNR DOESNT MATCH
            else {
                mainBox.style.backgroundImage = `url(${pictureArray[randomPicker].folderURL}/lose.jpeg)`;
                wrongAnswer();
            }
            //REMOVE ALL THE IMAGEBOXES (NOT USED ANYMORE)
            for(var i = 1; i <= 3; i++) {
                $("#imageBox" + i).remove();       
            }
            //REMOVE THE CURRENT QUESTION IN THE ARRAY SO IT DOESNT POP UP AGAIN
            pictureArray.splice(randomPicker, 1);
        }
        //SET BOXNR TO UNDEFINED AGAIN SO IT DOESNT RUN WHEN NOT HAVING DROPPED A BOX
        boxNr = undefined;
    }
}, true);

//MAKING IT SO YOU CAN MOVE THE BOX ONCE YOU HAVE PRESSED LEFTCLICK ON A BOX
document.addEventListener('mousemove', function(){
    //STOP ALL OTHER STUFF
    event.preventDefault();
    //CHECKING IF YOU HAVE PRESSED ONE OF THE BOXES
    if(isDown) {
        mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        //CHECK WHICH BOX IS CURRENTLY BEING HELD
        for(var i = 1; i <= 3; i++) {
            if(checkHover == "imageBox" + i){
                document.getElementById("imageBox" + i).style.left = (mousePosition.x + offset[0]) + 'px';
                document.getElementById("imageBox" + i).style.top = (mousePosition.y + offset[1]) + 'px';

            }
        }
        
    }
})