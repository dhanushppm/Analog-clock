const Hour = document.querySelector('.hrs');
const Minute = document.querySelector('.min');
const Second = document.querySelector('.sec');
 
function runclock(){
    const time = new Date();
    const sec = time.getSeconds()/60;
    const min = (sec+time.getMinutes())/60;
    const hrs = (min+time.getHours())/12;
    
    Hour.style.setProperty('--rotation',hrs*360);
    Minute.style.setProperty('--rotation',min*360);
    Second.style.setProperty('--rotation',sec*360);

}
runclock();
setInterval(runclock,1000);