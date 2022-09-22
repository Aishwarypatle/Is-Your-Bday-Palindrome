let birthDate = document.querySelector('#birth-date');
let checkBtn = document.querySelector('#submit');
let output = document.querySelector('output');




function DateToString() 
{
    let date  =  birthDate.value;
    date = date.split('-');
    

    console.log(date);
}

checkBtn.addEventListener('click',DateToString);