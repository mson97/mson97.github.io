(function(){
    'use strict';
    const btn = document.querySelector('button');
       
        btn.addEventListener('click', function(){
            let new_paragraph = document.createElement('p');
            new_paragraph.appendChild(document.createTextNode('A new paragraph'));
           document.querySelector('div').appendChild(new_paragraph);
        });
} ());