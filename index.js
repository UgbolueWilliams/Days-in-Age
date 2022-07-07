const submitButton=document.querySelector('button');
const yearInput=document.querySelectorAll('input')[0];
const presentInput=document.querySelectorAll('input')[1];
const yearText=document.querySelector('#year-text')

submitButton.addEventListener('click', subtractAge)

function subtractAge(){
const yearValue=yearInput.value;
const presentValue=presentInput.value;
const answer=presentValue-yearValue;
const totalDays=answer* 365
yearText.innerHTML=`You are ${totalDays}days old`
}