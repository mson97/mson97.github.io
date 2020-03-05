"use strict";

(function(){
    console.log("logging");

    const elem = document.querySelectorAll('.drag-cont');

    let pos1, pos2, pos3, pos4;
    let x;

    for (let i = 0; i < elem.length; ++i) {
        elem[i].onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        x = e.target.parentNode;
        
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos3);
        console.log(pos4);
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        x.style.top = (x.offsetTop - pos2) + "px";
        x.style.left = (x.offsetLeft - pos1) + "px";
        x.style.opacity = 0.8;

    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        x.style.opacity = 1;

        for (let i = 0; i < elem.length; ++i) {
            if (elem[i] != x) {
                elem[i].style.zIndex = 0;
            }
        }
        x.style.zIndex = 2;
    }
})();
