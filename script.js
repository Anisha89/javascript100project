/*let current_year = new Date().getFullYear();
console.log(current_year);
let current_Date = new Date();
console.log(current_Date);
const newyear = new Date(`January 1 ${current_year+1} 00:00:00`)
console.log(newyear);
//find difference b/w newyear - current year== how many days left
const diffdate= newyear - current_Date
console.log(diffdate);
/*1000ms 1s 
60s 1m
60m 1hour
24hour 1 days
const days=Math.floor(diffdate/1000/60/60/24);
const hours=Math.floor((diffdate/1000/60/60)%24);
const minutes=Math.floor((diffdate/1000/60)%60);
const seconds=Math.floor((diffdate/1000)%60);
const millisecondss=Math.floor(diffdate%1000);
console.log(days,hours,minutes,seconds,millisecondss)*/
//selecting html id tag

const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

           
function countingTime(){
     const current_year = new Date().getFullYear();
     const new_year=new Date(`January 1 ${current_year+1} 00:00:00`);
     const current_Date =new Date()
     const  diffDate =new_year - current_Date;
     console.log(diffDate);
     const d =Math.floor(diffDate/1000/60/60/24);
     console.log(d);
     const h = Math.floor((diffDate/1000/60/60)%24);
     const m=Math.floor((diffDate/1000/60)%60);
     const s=Math.floor((diffDate/1000)%60);
     console.log(d,h,m,s)
     
  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;

   
}
setInterval(countingTime,1000);
