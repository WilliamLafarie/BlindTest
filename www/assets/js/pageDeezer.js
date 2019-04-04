const levenshtein = require('js-levenshtein');
document.addEventListener("DOMContentLoaded", function(event) {
    track = document.querySelectorAll('h2')[0].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,'');


    artist = document.querySelectorAll('h2')[1].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,'');
    console.log(track);
    console.log(artist);


    button = document.querySelector('.valider');
    button.addEventListener('click', ()=>{
        var chaineValide = document.querySelector('input');
        var answer 
        if (chaineValide.value.length != 0){
            answer = chaineValide.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,'');
            console.log('answer :' + answer) 
            
            answerIsOk(track,answer,'track')
            answerIsOk(artist,answer, 'artist')
        }
    })
    
    let answerIsOk = (param1, answer,type)=>{
        if(levenshtein(param1,answer)<=3){
            console.log(type + ' is ok');
        console.log(levenshtein(param1,answer))
        document.querySelector('#'+type).style.opacity = "1";
        document.querySelector('#'+type).style.color = "green";
    }
    }



    

  });