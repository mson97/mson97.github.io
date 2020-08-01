"use strict";

(function() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/[^ ]/g, "<span class='letter'>$&</span>");
    

    anime.timeline({loop: false, duration:9000})
    .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 500
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 500
    }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1500,
        offset: '-=775',
        delay: (el, i) => 100 * (i+1)
    }).add({
        targets: '.ml11',
        opacity: 1,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 2000
    })
})();