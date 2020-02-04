(function(){
    'use strict';
    var btn = document.querySelector('button');
       
    btn.addEventListener('click', function(){
        const paragraphs = document.querySelectorAll('p');
        for(let i = 0; i < paragraphs.length; ++i) {
            paragraphs[i].style.color = "green";
        }
    });
}) ();