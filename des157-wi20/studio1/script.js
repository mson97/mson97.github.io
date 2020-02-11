document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//sumbit
  document.myform.onsubmit = processForm;

//generate function
  function processForm() {
    "use strict"
    //console.log("here")
    const adj = document.myform.adj.value;
    const n1 = document.myform.n1.value;
    const n2 = document.myform.n2.value;
    const verb = document.myform.verb.value;
    const name = document.myform.name.value;
    document.getElementById('result').innerHTML = 
        "Hello and welcome to the " + adj + " campus of UC Davis! If you look to your right, you can see a " + n1 + 
        ".<br> Let me take you to the " + n2 + ", my favorite place to " + verb + " on campus.<br> I hope you liked this " +  
        "one-stop tour of Davis! <br> My name was " + name + " and I'll see you around!<br>";
    return false; 
  }
});