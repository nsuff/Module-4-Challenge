
//some variables
var quizstate = 1;
var count = 0;
var time = 40;

var l1;
var l2;
var l3;
var l4;
var l5;
var i1;
var i2;
var i3;
var i4;
var i5;

function sortleader(i,n){
    if (n > l1) {
        l5=l4;
        l4=l3;
        l3=l2;
        l2=l1;
        l1=n;
        i5=i4;
        i4=i3;
        i3=i2;
        i2=i1;
        i1=i;
    } else if (n > l2) {
        l5=l4;
        l4=l3;
        l3=l2;
        l2=n;
        i5=i5;
        i4=i3;
        i3=i2;
        i2=i;
    } else if (n > l3) {
        l5=l4;
        l4=l3;
        l3=n;
        i5=i4;
        i4=i3;
        i3=i;
    } else if (n > l4) {
        l5=l4;
        l4=n;
        i5=i4;
        i4=i;
    }
    else if (n > l5) {
        l5=n;
        i5=i;
    }

    if (l1 > 0) {
        localStorage.setItem(lead1l, l1);
        localStorage.setItem(lead1i, i1);
        firstname = localStorage.getItem(lead1i);
        firstscore = localStorage.getItem(lead1l);
        place1.style.display = "inline-block";
    }
    
    if (l2 > 0) {
        localStorage.setItem(lead2l, l2);
        localStorage.setItem(lead2i, i2);
        place1.style.display = "inline-block";
    }
    
    if (l3 > 0) {
        localStorage.setItem(lead3l, l3);
        localStorage.setItem(lead3i, i3);
        place1.style.display = "inline-block";
    }
    
    if (l4 > 0) {
        localStorage.setItem(lead4l, l4);
        localStorage.setItem(lead4i, i4);
        place1.style.display = "inline-block";
    }
    
    if (l5 > 0) {
        localStorage.setItem(lead5l, l5);
        localStorage.setItem(lead5i, i5);
        place1.style.display = "inline-block";
    }
    


}



//console.log(button1Btn.innerHTML);
//console.log(button1Btn.innerText);
//console.log(button1Btn.textContent);


//clicked button functions
function click1() {

    if (quizstate==1) {

        quizstate = 2;
        firstquestion();
        timer.textContent = time;
        qtime();
    }

    else if (quizstate==2 || quizstate==3 || quizstate==6) {
        alertNo();
    }

    else if (quizstate==4) {
        count += 1;
        score.textContent = count;
        quizstate=5;
        alert("Correct");
        fourthquestion();
    }

    else if (quizstate==5) {
        alertNWC();
    }

}

function click2() {

    if (quizstate==1) {
        alert("Why are you here then?");
    }

    else if (quizstate==2 || quizstate==3) {
        alertNo();
    }

    else if (quizstate==4) {
        alertCompWrong();
    }

    else if (quizstate==5) {
        count += 1;
        score.textContent = count;
        quizstate=6;
        alert("Correct");
        fifthquestion();
    }

    else if (quizstate==6) {
        count += 1;
        score.textContent = count;
        quizstate=0;
        alert("Correct");
        endquiz();
    }
}

function click3() {

    if (quizstate==2 || quizstate==3) {
        alertNo();
    }

    else if (quizstate==4 || quizstate==6) {
        alertCompWrong();
    }

    else if (quizstate==5) {
        alertNWC();
    }

}

function click4() {

    if (quizstate==2) {
        count += 1;
        score.textContent = count;
        quizstate=3;
        alert("Correct");
        secondquestion();
    }

    else if (quizstate==3) {
        count += 1;
        score.textContent = count;
        quizstate=4;
        alert("Correct");
        thirdquestion();
    }

    else if (quizstate==4) {
        alertCompWrong();
    }

    else if (quizstate==5 || quizstate==6) {
        alertNWC();
    }

}

function alertNo() {
    wronganswer();
    alert("No");
}

function alertCompWrong() {
    wronganswer();
    alert("Completely Wrong");
}

function alertNWC() {
    wronganswer();
    alert("Nowhere Close to Correct");
}





//starting stuff
var qinterval;
function qtime(){

    qinterval = setInterval(countdown, 1000);
}

function countdown(){
    time = time-1;
    timer.textContent = time;
    if (time<=0) {
        clearInterval(qinterval);
        endquiz();
    }
}

function wronganswer() {
    time = time-5;
}



function checkstate() {
    if (quizstate==1) {
        button3Btn.style.visibility = "hidden";
        button4Btn.style.visibility = "hidden";
        score.innerHTML = 0;
    }

    place1.style.display = "none";
    place2.style.display = "none";
    place3.style.display = "none";
    place4.style.display = "none";
    place5.style.display = "none";

}

window.onload = function() {
    checkstate();
}

function visiblebutton(n){
    n.style.visibility = "visible";
}


//other functions that do stuff
function firstquestion(){
    question.textContent = "How much was the stolen syrup worth from the Great Canadian Maple Syrup Heist?";
    visiblebutton(button3Btn);
    visiblebutton(button4Btn);
    button1Btn.textContent = "$18,000";
    button2Btn.textContent = "$170,630";
    button3Btn.textContent = "$2.3 million";
    button4Btn.textContent = "$14.4 million";
    qimage.src = "./assets/images/syrupcanada.jpg";

}

function secondquestion(){
    question.textContent = "What does this formula best refer to?";
    button1Btn.textContent = "Money Multiplier Formula";
    button2Btn.textContent = "Simple Linear Regression";
    button3Btn.textContent = "The Quadratic Formula";
    button4Btn.textContent = "Multiple Linear Regression";
    qimage.src = "./assets/images/linearregression.jpg";

}

function thirdquestion(){
    question.textContent = "What town is almost straight east of Rome?";
    button1Btn.textContent = "Pettorano sul Gizio";
    button2Btn.textContent = "Forli";
    button3Btn.textContent = "Soverato";
    button4Btn.textContent = "Santander";
    qimage.src = "./assets/images/italymap.jpg";

}

function fourthquestion(){
    question.textContent = "Is this a shark?";
    button1Btn.textContent = "Yes";
    button2Btn.textContent = "No";
    button3Btn.textContent = "Maybe";
    button4Btn.textContent = "Sometimes";
    qimage.src = "./assets/images/dolphin.jpg";

}

function fifthquestion(){
    question.textContent = "What best describes this painting?";
    button1Btn.textContent = "One Shade of Black";
    button2Btn.textContent = "Two Shades of Black";
    button3Btn.textContent = "A Layer of White and Two Shades of Black";
    button4Btn.textContent = "A Layer of Gray and Two Shades of Black";
    qimage.src = "./assets/images/bonescape.jpeg";

}

function endquiz(){
    question.textContent = "Your Score is: " + count;
    buttons.style.display = "none";
    qimage.style.display = "none";
    clearInterval(qinterval);
    if (count > l5) {
        sortleader(prompt("What are your initials?"), count);
    }
}

//button variables and eventlisteners
var timer = document.querySelector("#timer");
var buttons = document.querySelector("#buttons");
var score = document.querySelector("#score");
var question = document.querySelector("#question");
var qimage = document.querySelector("#qimage");

var firstname = document.querySelector("#name1");
var firstscore = document.querySelector("#score1");
var secondname = document.querySelector("#name2");
var secondscore = document.querySelector("#score2");
var thirdname = document.querySelector("#name3");
var thirdscore = document.querySelector("#score3");
var fourthname = document.querySelector("#name4");
var fourthscore = document.querySelector("#score4");
var fifthname = document.querySelector("#name5");
var fifthscore = document.querySelector("#score5");

var place1 = document.querySelector("#place1");
var place2 = document.querySelector("#place2");
var place3 = document.querySelector("#place3");
var place4 = document.querySelector("#place4");
var place5 = document.querySelector("#place5");

var button1Btn = document.querySelector("#button1");
var button2Btn = document.querySelector("#button2");
var button3Btn = document.querySelector("#button3");
var button4Btn = document.querySelector("#button4");

button1Btn.addEventListener("click", click1);
button2Btn.addEventListener("click", click2);
button3Btn.addEventListener("click", click3);
button4Btn.addEventListener("click", click4);

