let body = document.getElementsByTagName('body')[0];


// function getRandomNumber(){
//     return Math.floor(Math.random() * 256);
// }


function setTimePosition(){
    let time = new Date();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let hour = time.getHours();
    let hourTens = document.getElementsByClassName('hour-tens')[0];
    let hourOnes = document.getElementsByClassName('hour-ones')[0];
    let minTens = document.getElementsByClassName('min-tens')[0];
    let minOnes = document.getElementsByClassName('min-ones')[0];
    let secTens = document.getElementsByClassName('sec-tens')[0];
    let secOnes = document.getElementsByClassName('sec-ones')[0];
    if(hour<=9){
        hourOnes.style.top = `-${hour * 39}px`;
    }else{
        let hourValue = hour.toString().split('');
        let [hourTensDigit, hourOnesDigit] =  hourValue;
        hourTens.style.top = `-${hourTensDigit*39}px`;
        hourOnes.style.top = `-${hourOnesDigit*39}px`;
    }
    if(min<=9){
        minOnes.style.top = `-${min * 39}px`;
    }else{
        let minValue = min.toString().split('');
        let [minTensDigit, minOnesDigit] =  minValue;
        minTens.style.top = `-${minTensDigit*39}px`;
        minOnes.style.top = `-${minOnesDigit*39}px`;
    }

    if(sec<=9){
        secOnes.style.top = `-${sec * 39}px`;
    }else{
        let secValue = sec.toString().split('');
        let [secTensDigit, secOnesDigit] =  secValue;
        secTens.style.top = `-${secTensDigit*39}px`;
        secOnes.style.top = `-${secOnesDigit*39}px`;
    }
         

}

setInterval(() => {
//body.style.background = `linear-gradient(${getRandomNumber()}deg, rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()},1) 1%, rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()},1) 67%, rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()},1) 78%, rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()},1) 100%)`;
setTimePosition();
}, 1000);