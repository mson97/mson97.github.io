(function(){
    'use strict';

    const btn_add = document.querySelector('button');
    const btn_remove = document.querySelectorAll('button')[1];
    const dv = document.querySelector('div');
   
    btn_add.addEventListener('click', function(){
        const new_paragraph = document.createElement('p');
        new_paragraph.appendChild(document.createTextNode('A new paragraph'));
        dv.appendChild(new_paragraph);
    });

    btn_remove.addEventListener('click', function(){
        const paragraphs = document.querySelectorAll('p');
        dv.removeChild(dv.children[paragraphs.length - 1]);
    })
}) ();