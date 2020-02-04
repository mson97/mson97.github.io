(function(){
    'use strict';

    const bdy = document.querySelector("body");
    document.addEventListener("keydown", function(event){
        const whichKey = String.fromCharCode(event.which);
        switch(true){
            case whichKey == "B": bdy.className="one"; break;
            case whichKey == "V": bdy.className="two"; break;
            case whichKey == "C": bdy.className="three"; break;
            case whichKey == "F": bdy.className="four"; break;
            case whichKey == "G": bdy.className="five"; break;
    }
   });
}) ();