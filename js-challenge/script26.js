(function(){
    'use strict';
    const btn_add = document.querySelector('button');
    const btn_remove = document.querySelectorAll('button')[1];
    const dv = document.querySelector('div');
   
    btn_add.addEventListener('click', function(){
        const paragraphs = document.querySelectorAll('p');
        const new_paragraph = document.createElement('p');
        new_paragraph.appendChild(document.createTextNode(`This is paragraph number ${paragraphs.length + 1}`));
        dv.appendChild(new_paragraph);
    });

    btn_remove.addEventListener('click', function(){
        const paragraphs = document.querySelectorAll('p');
        if (paragraphs.length === 1) {
            alert("Don't delete the last paragraph!");
        } else {
        dv.removeChild(dv.children[paragraphs.length - 1]);
        }
    });
})();