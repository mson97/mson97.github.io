(function(){
    'use strict';
    const bdy = document.querySelector("body");
       window.addEventListener("scroll", function(){
           const pagetop = window.pageYOffset || document.documentElement.scrollTop;
           switch(true){
               case pagetop < 500: bdy.className="one"; break;
               case pagetop < 1000: bdy.className="two"; break;
               case pagetop < 1500: bdy.className="three"; break;
               case pagetop < 2000: bdy.className="four"; break;
               case pagetop < 2500: bdy.className="five"; break;
           }
       });
}) ();