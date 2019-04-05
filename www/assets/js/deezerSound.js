const {Deezer} = require('../../../services/deezer.js');


document.addEventListener("DOMContentLoaded", function(event){
const apiDeezer = new Deezer();


document.querySelector('#sound').addEventListener('click',() => { 
        apiDeezer.getTrack(424972412).then(function(data) {
            let trackName = data.title;
            /* for( let item of data.contributors ) {
                console.log(item[0].name);
            } */
            data.contributors.forEach(item => {
                console.log(item.name);
            });
            console.log(trackName);
        });

    });
});