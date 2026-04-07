let startStopBtn =document.getElementaryById('startStopBtn');
let resetBtn =document.getElementaryById('resetBtn');
let lapBtn =document.getElementaryById('lapBtnBtn');
let timeDisplay =document.getElementaryById('time-display');
let lapList =document.getElementaryById('lap-list');
let isrunning = false;
let time=0;
let interval;
let lapcount=1;
function formatTime(seconds) {
    let hours=Math.floor(seconds/3600);
    let minutes=Math.floor((seconds%3600)/60);
    let secs = seconds % 60;
    return $ ;
    {String(hours).padStart(2,'0')};
    {String(minutes).padStart(2,'0')} ; 
    {String(secs).padStart(2,'0')} ;
}
    startStopBtn.addEventListener('click'),() => {
        if(isRunning) {
            clearInterval(interval);
            startStopBtn.textContent='Start';
        } else {
            interval=setInterva(() => 
            {
                time++;
                timeDisplay.textContent=formatTime(time);
            }, 1000);
            startStopBtn.textContent='Stop';
            
        }
        isRunning = !isRunning;
        });
        resetBtn.addEventListener('click',() => { 
            clearInterval(interval);
            isRunning=false;
            time=0;
            timeDisplay.textContent = formatTime(time);
            startStopBtn.textContent='Start;
            lapList.innerHTML ='';
            lapcount=1;
        
        });
        lapBtn.addEventListener('click',() => {
            if(isRunning) {
                let lapTime=formatTime(time);
                let lapItem=document.CreateElement('li');
                lapItem.textContent= `Lap ${lapcount}: ${lapTime}` ;
                lapList.appendChild(lapItem);
                lapCount++;
            }
        });
    





