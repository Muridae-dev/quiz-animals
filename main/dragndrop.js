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


function createImages () {
    containerBox.innerHTML = "";
    randomPicker = random(pictureArray);
    if(mainBox) $("#mainBox").remove();
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


    imageBox1 = document.getElementById("imageBox1");
    imageBox2 = document.getElementById("imageBox2");
    imageBox3 = document.getElementById("imageBox3");
    mainBox = document.getElementById("mainBox");
    textBox.innerHTML = pictureArray[randomPicker].question;
    createEventListeners();
}

function initDragnDrop () {
    createImages();
}

function createEventListeners () {
    if(imageBox1) {
        imageBox1.addEventListener('mousedown', (e) => {
            isDown = true;
            checkHover = "imageBox1";
            boxNr = 1;
            offset = [
                imageBox1.offsetLeft - e.clientX,
                imageBox1.offsetTop - e.clientY
            ];
        }, true);
    }
    
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


document.addEventListener('mouseup', function() {
    isDown = false;
    console.log(boxNr);
    if(boxNr != undefined) {
    imageRect = document.getElementById("imageBox" + boxNr).getBoundingClientRect();
    mainImageRect = mainBox.getBoundingClientRect();
    console.log(mainBox.offsetHeight);
    if(imageRect.top <= mainImageRect.top + mainBox.offsetHeight &&
        imageRect.top >= mainImageRect.top &&
        imageRect.left <= mainImageRect.left + mainBox.offsetHeight &&
        imageRect.left >= mainImageRect.left) {
            if(boxNr == pictureArray[randomPicker].winNr){
                mainBox.style.backgroundImage = `url(${pictureArray[randomPicker].folderURL}/win.jpeg)`;
                correctAnswer();
            }
            else {
                mainBox.style.backgroundImage = `url(${pictureArray[randomPicker].folderURL}/lose.jpeg)`;
                wrongAnswer();
            }
            for(var i = 1; i <= 3; i++) {
                $("#imageBox" + i).remove();       
            }
            pictureArray.splice(randomPicker, 1);
        }
        boxNr = undefined;
    }
}, true);

document.addEventListener('mousemove', function(){
    event.preventDefault();
    if(isDown) {
        mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        for(var i = 1; i <= 3; i++) {
            if(checkHover == "imageBox" + i){
                document.getElementById("imageBox" + i).style.left = (mousePosition.x + offset[0]) + 'px';
                document.getElementById("imageBox" + i).style.top = (mousePosition.y + offset[1]) + 'px';

            }
        }
        
    }
})