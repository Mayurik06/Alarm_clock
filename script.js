let clock=document.querySelector('.clock-time');
let hourVal=document.querySelector('#hour');
let minuteVal=document.querySelector('#minute');
let secVal=document.querySelector('#sec');
let ampmVal=document.querySelector('#ampm');
let setBtn=document.querySelector('.set-btn');
let resetBtn=document.querySelector('.reset-btn');
let alarmMsg=document.querySelector('.alarm-msg');
let alarmTime;
let alarmTone= new Audio('alarm_clock.mp3');



hourVal.addEventListener('click', printTime(12,hourVal));
minuteVal.addEventListener('click',printTime(60,minuteVal));
secVal.addEventListener('click',printTime(60,secVal));
setBtn.addEventListener('click',setAlarm);
resetBtn.addEventListener('click',resetAlarm);


//To print option tag
function printTime(value,fun){
   if(fun==hourVal){
    for(let i=1;i<=value;i++){
      let option=document.createElement('option');
          option.value=i;
        option.innerHTML=i;
        fun.appendChild(option);
        }
    }else if(fun==minuteVal || fun==secVal) {
        for(let i=0;i<=value;i++){
            let option=document.createElement('option');
            if(i<=9){
                option.value='0'+i;
        option.innerHTML='0'+i;
            }
      else{
    option.value=i;
        option.innerHTML=i;
}
            fun.appendChild(option); 
    }  
}
}

//For Running clock time
let t;
function runningClock(){
let date=new Date();
let t=date.toLocaleTimeString();
clock.innerHTML=t;
if(t==alarmTime){
alarmTone.play(), 5000;
}

}

setInterval(runningClock,1000);


//for setting alarm time

function setAlarm(){

  let hour=hourVal.options[hourVal.selectedIndex].value;   
    let min=minuteVal.options[minuteVal.selectedIndex].value;
    let sec=secVal.options[secVal.selectedIndex].value;
    let ap=ampmVal.options[ampmVal.selectedIndex].value;

    let setTime=`${hour}:${min}:${sec} ${ap}`;
  if(hour==""|| min=="" || sec==""||ap==""){
    alarmMsg.innerHTML="Please enter a valid time";
  }
  else(
    alarmMsg.innerHTML=`Your Alarm is set at ${setTime}`
  )
    alarmTime=setTime;

    
}


//to reset alarm
function resetAlarm(){
hourVal.value='';
minuteVal.value='';
secVal.value='';
ampmVal.value='';
alarmTime='';
alarmMsg.innerHTML='';
}
