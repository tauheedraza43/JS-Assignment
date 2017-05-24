

// function myFunction(){
//     alert("Hello World");
// }

/*
function add(){
    alert(0);
}

function myFunction(){
    setTimeout(add, 1000);
}*/




//  Stop Watch
var stopWatch = document.getElementById("stopWatch"),
    
    second = 0,
    minutes = 0,
    h = 0;
    ms = 0;


function timer(){
    second++
    if(second > 59){
        second = 0;
        minutes++;
    }else if(minutes > 59){
        minutes = 0;
        h++;    
    }
    stopWatch.innerHTML =
    (h ? (h > 9) ? h : '0' + h : '00') + ":" +(minutes ? (minutes > 9) ? minutes : '0' + minutes : '00') + ":" +(second ? (second > 9) ? second : '0' + second : '00') ;
    //  h + ':' + minutes + ':' + second ;
    startTimer();
}
function startTimer(){
    setTime = setTimeout(timer, 1000)
}
startTimer();   

function stopTimer(){
    clearTimeout(setTime);
}

function resetTimer(){
    clearTimeout(setTime);
    stopWatch.innerHTML = "00:00:00";
    second = 0,
    minutes = 0,
    h = 0;
}






//ternory operator
// (true) ? alert(): console.log(545454);





//calculator

var showDisplay = document.getElementById('display'),
    value1, value2, operatorSign , calculation;

// function for operator
function operator(sign){
    operatorSign = sign;
    showDisplay.value = operatorSign;
}

// function for values
function cal(num){
    num = num.toString();
    if(operatorSign === undefined){
        if(value1 === undefined){
            value1 = num
        }else{
            value1 += num
        }
        showDisplay.value = value1;
    }else{
        if(value2 === undefined){
            value2 = num
        }else{
            value2 += num
        }
        showDisplay.value = value2;
        
    console.log('value1', value1);
    console.log('value2', value2);
    console.log('operator', operatorSign);
    }
    
}


// function of calculation
function equal() {
    value1 = parseInt(value1);
    value2 = parseInt(value2);

    if(operatorSign == '+'){
        calculation = value1 + value2;
        value1 = calculation;
        value2 = undefined;
        operatorSign = undefined;
    }else if(operatorSign == '-'){
        calculation = value1 - value2;
        value1 = calculation;
        value2 = undefined;
        operatorSign = undefined;
    }else if(operatorSign == '*'){
        calculation = value1 * value2;
        value1 = calculation;
        value2 = undefined;
        operatorSign = undefined;
    }else if(operatorSign == '/'){
        calculation = value1 / value2;
        value1 = calculation;
        value2 = undefined;
        operatorSign = undefined;
    }
    showDisplay.value = calculation;
}


function root(){
    value1 = parseInt(value1);
    calculation = value1 / 2;
    showDisplay.value = calculation;
    calculation = value1;
}


function square(){
    value1 = parseInt(value1);
    calculation = value1 * 2;
    showDisplay.value = calculation;
    calculation = value1;
}

function reset(){
    value1 = undefined;
    value2 = undefined;
    operatorSign = undefined;
    showDisplay.value = null;
}


// function cal(sign){
//     operatorSign = sign
//     showDisplay.innerHTML = operatorSign;    
// }


