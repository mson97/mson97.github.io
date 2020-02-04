(function(){
    'use strict';
    
    const dv = document.querySelector('div');
    dv.addEventListener('mouseover', function(){
        dv.classList.add("big");
    });
    dv.addEventListener("mouseout", function(){
        dv.classList.remove("big");
    });
}) ();