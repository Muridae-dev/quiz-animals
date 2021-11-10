// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtnQn4WD9_XhkP225KpDJ4z4ILTTRlI3c",
    authDomain: "quizhi-8be86.firebaseapp.com",
    projectId: "quizhi-8be86",
    storageBucket: "quizhi-8be86.appspot.com",
    messagingSenderId: "136726635327",
    appId: "1:136726635327:web:6674d75004ba5d90ab698a",
    measurementId: "G-5N5ZJ8Q3TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var url = window.location.href;
var url2 = url.split("?");
var url3 = url2[1].split("=");
var score = url3[1];

document.getElementById("scoreP").innerHTML = "YOUR SCORE IS: " + score;

//ADD TO FIREBASE
async function postScore() {
    var name = readInput("name");
    if(!score) return null;
        try {
            const docRef = await addDoc(collection(db, "score"), {
                score: score,
                name: name,
            });
            clearInput("score");
            clearInput("name");
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    $("#name").remove();
    $("#postBtn").remove();
    displayScore();
}

//GRAB SCORE SAVED INSIDE FIREBASE
async function getScore() {
    const score = await getDocs(collection(db, "score"));
    return score;
}

//WRITE OUT SCORE SAVED IN FIREBASE
async function displayScore(id) {
    //GRAB SCORE
    document.getElementById("scoreBox").innerHTML = "";
    var scoreDb = await getScore();
    console.log("this is scoredb: " + scoreDb)
    
    
    var arraySaveScore = [];
    var runArray = 0;

    //RUN THROUGH ALL THE SCORE OBJECTS INSIDE FIREBASE AND ADD THEM TO HTML
    scoreDb.forEach((doc) => {
        arraySaveScore[runArray] = { score: doc.data().score, name: doc.data().name}
        runArray++;
    })

    addToElement('scoreBox', arraySaveScore);
    console.log(arraySaveScore)

    return;
}
//_______________________FUNCTIONS TO MANIPULATE HTML ELEMENTS_______________________
    //READ VALUE OF INPUT BOX
    function readInput(id) {
        if(!document.getElementById(id) && !document.getElementById(id).value) return null;
        
        return document.getElementById(id).value;
    }

    //CLEAR INPUT BOX
    function clearInput(id) {
        if(!document.getElementById(id)) return null;
        document.getElementById(id).value = '';
    }

    //CREATE HTML ELEMENTS TO WRITE OUT ITEMS GRABBED FROM FIREBASE
    function formatListItem(item, i) {
        console.log("this is item" + item);
        return `#${i} - ${item.score} -- ${item.name} <br/>`
    }

    //ADD SCORE TO THE ELEMENT
    function addToElement(ele, arraySaveScore) {
        arraySaveScore.sort(function(a,b) {
            return parseFloat(a.score) - parseFloat(b.score);
        });
        arraySaveScore.reverse();
        if(!document.getElementById(ele)) return null;
        console.log(arraySaveScore);
        var i = 1;
        arraySaveScore.forEach(item => {document.getElementById(ele).innerHTML += formatListItem(item, i); i++;})
        
    }

//_______________________END_______________________

//ADD EVENTLISTENER FOR BUTTONS
function addEventListener(){
    var postBtn = document.getElementById("postBtn");
    if(!postBtn) return null;
    postBtn.removeEventListener("click", postScore);
    postBtn.addEventListener("click", postScore);
}

//INITIALIZE
async function init(){
    await displayScore('scoreBox');
    addEventListener();
}

init();
