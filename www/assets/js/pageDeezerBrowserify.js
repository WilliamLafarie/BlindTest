(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
module.exports = (function()
{
  function _min(d0, d1, d2, bx, ay)
  {
    return d0 < d1 || d2 < d1
        ? d0 > d2
            ? d2 + 1
            : d0 + 1
        : bx === ay
            ? d1
            : d1 + 1;
  }

  return function(a, b)
  {
    if (a === b) {
      return 0;
    }

    if (a.length > b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    var la = a.length;
    var lb = b.length;

    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
      la--;
      lb--;
    }

    var offset = 0;

    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
      offset++;
    }

    la -= offset;
    lb -= offset;

    if (la === 0 || lb < 3) {
      return lb;
    }

    var x = 0;
    var y;
    var d0;
    var d1;
    var d2;
    var d3;
    var dd;
    var dy;
    var ay;
    var bx0;
    var bx1;
    var bx2;
    var bx3;

    var vector = [];

    for (y = 0; y < la; y++) {
      vector.push(y + 1);
      vector.push(a.charCodeAt(offset + y));
    }

    var len = vector.length - 1;

    for (; x < lb - 3;) {
      bx0 = b.charCodeAt(offset + (d0 = x));
      bx1 = b.charCodeAt(offset + (d1 = x + 1));
      bx2 = b.charCodeAt(offset + (d2 = x + 2));
      bx3 = b.charCodeAt(offset + (d3 = x + 3));
      dd = (x += 4);
      for (y = 0; y < len; y += 2) {
        dy = vector[y];
        ay = vector[y + 1];
        d0 = _min(dy, d0, d1, bx0, ay);
        d1 = _min(d0, d1, d2, bx1, ay);
        d2 = _min(d1, d2, d3, bx2, ay);
        dd = _min(d2, d3, dd, bx3, ay);
        vector[y] = dd;
        d3 = d2;
        d2 = d1;
        d1 = d0;
        d0 = dy;
      }
    }

    for (; x < lb;) {
      bx0 = b.charCodeAt(offset + (d0 = x));
      dd = ++x;
      for (y = 0; y < len; y += 2) {
        dy = vector[y];
        vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
        d0 = dy;
      }
    }

    return dd;
  };
})();


},{}],2:[function(require,module,exports){
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
},{"js-levenshtein":1}]},{},[2]);
