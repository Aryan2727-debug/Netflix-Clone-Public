console.log("Welcome to the Netflix Clone");

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYQnz1nuWOOale9PH4VHuUNqrrLzJa4Ts",
    authDomain: "netflix-clone-c5981.firebaseapp.com",
    projectId: "netflix-clone-c5981",
    storageBucket: "netflix-clone-c5981.appspot.com",
    messagingSenderId: "576283504368",
    appId: "1:576283504368:web:516857ede5ba68d3f19c35",
    measurementId: "G-9EQY59JTR3"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function login(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email,password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}



function xyz(){
    alert("Content successfully added to your Favourites list!");
}

const imgs=[];

imgs[1]='img/1.PNG';
imgs[2]='img/2.PNG';
imgs[3]='img/3.PNG';
imgs[4]='img/4.PNG';
imgs[5]='img/5.PNG';
imgs[6]='img/6.PNG';
imgs[7]='img/7.PNG';
imgs[8]='img/8.PNG';


window.onload = function(){
    const random = Math.floor(Math.random()* imgs.length);

    document.getElementById("a").style.backgroundImage = `url(${imgs[random]})`;
}
