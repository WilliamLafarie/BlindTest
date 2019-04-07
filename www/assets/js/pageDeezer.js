const levenshtein = require('js-levenshtein');
document.addEventListener("DOMContentLoaded", function(event) {

    let stringNormalize = (string)=>{
        return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,'');
    }

    track = document.querySelectorAll('h2')[0].textContent;
    artist = document.querySelectorAll('h2')[1].textContent;

    track = stringNormalize(track);
    artist = stringNormalize(artist);
    console.log(track);
    console.log(artist);


    button = document.querySelector('.valider');
    button.addEventListener('click', ()=>{
        var chaineValide = document.querySelector('input');
        var answer 
        if (chaineValide.value.length != 0){
            answer = chaineValide.value;
            answer = stringNormalize(answer);
            console.log('answer :' + answer) 
            
            answerIsOk(track,answer,'track')
            answerIsOk(artist,answer, 'artist')
            answerIsOk(artist+track,answer, 'trackArtist')
            answerIsOk(track+artist,answer, 'trackArtist')
            
        }
    })
    
    let answerIsOk = (param1, answer,type)=>{
        if(levenshtein(param1,answer)<=3){
           if(type != "trackArtist"){
            console.log(type + ' is ok');
            console.log(levenshtein(param1,answer))
            document.querySelector('#'+type).style.opacity = "1";
            document.querySelector('#'+type).style.color = "green";
           }
           else{
            console.log(type + ' is ok');
            console.log(levenshtein(param1,answer))
           }
    }
    }

   



  });