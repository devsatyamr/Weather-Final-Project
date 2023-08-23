let day = document.getElementById("day");
let date = document.getElementById("date");
let time = document.getElementById("time");

setInterval(thistime=()=>{
    let currenttime = new Date();
    let weakdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    time.innerHTML  = currenttime.getHours()+":"+currenttime.getMinutes()+":"+currenttime.getSeconds();
    day.innerHTML = weakdays[currenttime.getDay()];
    date.innerHTML = months[currenttime.getMonth()]+" "+currenttime.getDate();
},1000)
