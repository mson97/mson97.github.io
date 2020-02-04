(function(){
    'use strict';

    const frm = document.querySelector('form');
       frm.addEventListener('submit', function(event){
           event.preventDefault();
           const font_px = document.querySelector('input').value;

           if (parseInt(font_px)) {
               document.querySelector('h1').style.fontSize = font_px + "px";
           } else {
               alert("You must enter a number");
           }
       });
}) ();