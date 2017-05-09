
var random = Math.ceil(Math.random()*6);

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');

var lifeLine = document.getElementById('life-line');
var lifeImg = "<img src='images/life.png' >";
lifeLine.innerHTML = lifeImg + lifeImg + lifeImg ;

var remarks = document.getElementById('remarks');

//clock block
function clock(){
var time = new Date()
var hr = time.getHours()
var min = time.getMinutes()
var sec = time.getSeconds()
var ampm = " PM "
if (hr < 12){
ampm = " AM "
}
if (hr > 12){
hr -= 12
}
if (hr < 10){
hr = " " + hr
}
if (min < 10){
min = "0" + min
}
if (sec < 10){
sec = "0" + sec
}
document.clockForm.clockButton.value = hr + ":" + min + ":" + sec + ampm
setTimeout("clock()", 1000)
}
function showDate(){
var date = new Date()
var year = date.getYear()
if(year < 1000){
year += 1900
}
var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
alert( monthArray[date.getMonth()] + " " + date.getDate() + ", " + year)
}
window.onload=clock;
//-->

function one1(){
	if(1 == random){
		one.src = 'images/gold.png';
        remarks.innerHTML = '<h2>Congratulations! You Won...</h2><a href="index.html" >Play Again</a>';
            
	}else{
		one.src = 'images/fail.png';
		// one.style.transform = rotateY(180deg);
	}
}


/*
life line reduce code...
if(1 != random){
		one.src = 'images/fail.png';
            if(lifeLine.innerHTML === lifeImg + lifeImg + lifeImg){
                lifeLine.innerHTML = lifeImg + lifeImg;
            }
            else if(lifeLine.innerHTML === lifeImg + lifeImg){
                lifeLine.innerHTML = lifeImg;
            }
            else if(lifeLine.innerHTML === lifeImg){
                lifeLine.innerHTML = "<p>You Lost! Try your luck next time...</p>";
            }
	}
}
*/



function two2(){
	if(2 == random){
		two.src = 'images/gold.png';
		remarks.innerHTML = '<h2>Congratulations! You Won...</h2><a href="index.html" >Play Again</a>';

	}else{
		two.src = 'images/fail.png';
	}
}

function three3(){
	if(3 == random){
		three.src = 'images/gold.png';
		remarks.innerHTML = '<h2>Congratulations! You Won...</h2><a href="index.html" >Play Again</a>';
	}else{
		three.src = 'images/fail.png';
	}
}

function four4(){
	if(4 == random){
		four.src = 'images/gold.png';
		remarks.innerHTML = '<h2>Congratulations! You Won...</h2><a href="index.html" >Play Again</a>';
	}else{
		four.src = 'images/fail.png';
	}
}

function five5(){
	if(5 == random){
		five.src = 'images/gold.png';
		remarks.innerHTML = '<h2>Congratulations! You Won...</h2><a href="index.html" >Play Again</a>';
	}else{
		five.src = 'images/fail.png';
	}
}

function six6(){
	if(6 == random){
		six.src = 'images/gold.png';
		remarks.innerHTML = '<h2>Congratulations! You Won...</h2><a href="index.html" >Play Again</a>';
	}else{
		six.src = 'images/fail.png';
	}
}
