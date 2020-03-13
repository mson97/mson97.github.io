'use strict';

(function(){
    const nextBtnImg = '<img src="images/next.png" alt="next" class="next">';

   // const startBtn = document.querySelector('#start');
    const navLinks = document.querySelectorAll('nav ul li a');
    const nextBtns = document.querySelectorAll('.icon-btn a');

    const rectBtn = document.querySelectorAll('.rect-btn');

    //startBtn.addEventListener('click', smoothScroll);
    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', smoothScroll);
    });

    nextBtns.forEach(function(eachNextBtn) {
        eachNextBtn.addEventListener('click', smoothScroll);
    });

    rectBtn.forEach(function(eachRectBtn) {
        eachRectBtn.addEventListener('click', smoothScroll);
    });


    function smoothScroll(event) {
        
        event.preventDefault();
     
        let targetID = event.target.getAttribute('href');
       
        if (targetID == null) {
            targetID = event.target.parentElement.getAttribute('href');
        }
        
        const targetAnchor = document.querySelector(targetID);
        
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        //console.log(originalTop);
    }

    window.addEventListener('load', function() {
        const posts = document.querySelectorAll('section');
        const postTops = [];
        let lastPost = posts.length - 1;
        let pageTop;
        let counter = 0;
        let prevCounter = 0;

        posts.forEach(function(post) {
            postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
        });
        
        //console.log(postTops);

        window.addEventListener('scroll', function() {
            pageTop = window.pageYOffset + 250;
            // console.log(pageTop);

            if (pageTop > postTops[counter + 1]) {
                counter++;
                this.console.log(`scrolling down ${counter}`);
            } else if (counter > 0 && pageTop < postTops[counter]) {
                counter--;
                lastPost = posts.length - 1;
                this.console.log(`scrolling up ${counter}`);
            } else if (pageTop > postTops[lastPost]) {
                counter = lastPost;
                lastPost++;
                this.console.log(`last post: ${counter}`);
            }

            if (counter != prevCounter) {
                navLinks.forEach(function(eachLink) {
                    eachLink.removeAttribute('class');
                });
                var thisLink = document.querySelector(`nav ul li:nth-child(${counter + 1}) a`);
                thisLink.className = 'selected';
                prevCounter = counter;
            }
        });

    });
    
    let resizeId;
    window.addEventListener('resize', function() {
        this.clearTimeout(resizeId);
        this.window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
        this.window.location.reload(true);
    }, 500);

    document.querySelector('#fifth #timeline img').addEventListener("click", function(event) {
        const timeline = document.querySelector('#timeline');
        if (timeline.classList.contains('timeline1')) {
            timeline.classList.remove('timeline1');
            timeline.classList.add('timeline2');
        } else if (timeline.classList.contains('timeline2')) {
            timeline.classList.remove('timeline2');
            timeline.classList.add('timeline3');
            
            document.querySelector('#fifth-text').innerHTML = "we also work about the same amount, about 8.5 hours.<br>our 9-5 work day hasn’t seen much changes";
            document.querySelector('#fifth .icon-btn a').innerHTML = nextBtnImg;
            
        }
    });

    const circles = document.querySelectorAll('#sixth li');

    circles.forEach(function(eachCircle){
        eachCircle.addEventListener('click', showMetric);
    });

    function showMetric(event) {
            const circle_alt = event.target.getAttribute('alt');
            const circle_num = circle_alt[circle_alt.length - 1];
            const metric = document.getElementById('metric' + circle_num);
            metric.classList.remove('hidden');

            const hidden = document.querySelectorAll('#sixth .hidden');
            if (hidden.length === 0) {
                const sixthText = document.querySelector('#sixth .subtext');
                sixthText.classList.remove('subtext');
                sixthText.innerHTML = 'so far, not much has changed in sleep, work, and survival activities';
                const sixthNext = document.querySelector('#sixth .icon-btn a');
                sixthNext.innerHTML = nextBtnImg;
            }
    };

    document.getElementById('cloud1').addEventListener("click", function(event) {
        const seventhText = document.getElementById('seventh-text');
        seventhText.innerHTML = "let’s see how personal time has <a href='#eighth'>changed over the years</a>";
    });
    
    document.getElementById('cloud2').addEventListener("click", function(event){
        event.target.setAttribute('src', 'images/cloud3.png');
        event.target.parentNode.setAttribute('id', 'cloud3');
        let eighthText = document.getElementById('eighth-text');
        eighthText.innerHTML = "5 years ago";

        document.getElementById('cloud3').addEventListener("click", function(event){
            event.target.setAttribute('src', 'images/cloud4.png');
            event.target.parentNode.setAttribute('id', 'cloud4');
            eighthText = document.getElementById('eighth-text');
            eighthText.innerHTML = "today";

            document.getElementById('cloud4').addEventListener("click", function(event){
                event.target.setAttribute('src', 'images/cloud5.png');
                event.target.parentNode.setAttribute('id', 'cloud5');
                eighthText = document.getElementById('eighth-text');
                eighthText.innerHTML = "unlike the other parts of our lives, our personal time has drastically decreased.<br>screen time now takes up most of this precious, limited reserve.";
                const eighthNext = document.querySelector('#eighth .icon-btn a');
                eighthNext.innerHTML = nextBtnImg;
            });
        });
    });
    
})();