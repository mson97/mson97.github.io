(function(){
    "use strict";
    const nextBtnImg = '<img src="images/next.png" alt="next" class="next oscillate zoom">';

    /* All buttons/links that need smooth scroll when clicked */
    const navLinks = document.querySelectorAll('nav ul li a');
    const nextBtns = document.querySelectorAll('.icon-btn a');
    const rectBtn = document.querySelectorAll('.rect-btn');
    const paragLinks = document.querySelectorAll('.parag a');

    /* Add event handler to smooth scroll on slick for all buttons and links*/
    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', smoothScroll);
    });

    nextBtns.forEach(function(eachNextBtn) {
        eachNextBtn.addEventListener('click', smoothScroll);
    });

    rectBtn.forEach(function(eachRectBtn) {
        eachRectBtn.addEventListener('click', smoothScroll);
    });

    paragLinks.forEach(function(eachPLink) {
        eachPLink.addEventListener('click', smoothScroll);
    });


    /* smoothScroll based on example by Bill Mead - DES157 Winter 2020 */
    function smoothScroll(event) {

        event.preventDefault();

        let targetID = event.target.getAttribute('href');

        // the ID of the link lies in the outer element
        if (targetID === null) {
            targetID = event.target.parentElement.getAttribute('href');
        }

        const targetAnchor = document.querySelector(targetID);

        // define the original top of the page
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    }


    /* On page load, set up positions of each section to update selected element in nav */
    window.addEventListener('load', function() {
        const posts = document.querySelectorAll('section');
        const postTops = [];
        let lastPost = posts.length - 1;
        let pageTop;
        let counter = 0;
        let prevCounter = 0;

        // save each section's top position into posts array
        posts.forEach(function(post) {
            postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
        });

        /* Keep track of current page top as user scrolls */
        /* If they scroll past a top of a section, update the counter */
        window.addEventListener('scroll', function() {
            // The first section has a top margin of 250 px
            pageTop = window.pageYOffset + 250;

            if (pageTop > postTops[counter + 1]) {
                counter++;
                //this.console.log(`scrolling down ${counter}`);
            } else if (counter > 0 && pageTop < postTops[counter]) {
                counter--;
                lastPost = posts.length - 1;
                //this.console.log(`scrolling up ${counter}`);
            } else if (pageTop > postTops[lastPost]) {
                counter = lastPost;
                lastPost++;
                //this.console.log(`last post: ${counter}`);
            }

            /* User has scrolled to a different section */
            /* Update the selected section in the nav */
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

    /* For now, if the window is resized, we will move the page back to the top */
    let resizeId;
    window.addEventListener('resize', function() {
        this.clearTimeout(resizeId);
        this.window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
        this.window.location.reload(true);
    }, 500);

    /* Reveal portions of the timeline image in the fifth section */
    /* Sections will be shown sequentially after mouse is hovered over image */
    /* Display final text and next button once timeline image is all shown */
    document.querySelector('#fifth #timeline img').addEventListener("mouseover", function() {
        const timeline = document.querySelector('#timeline');
        setTimeout(function() {
            if (timeline.classList.contains('timeline1')) {
                timeline.classList.remove('timeline1');
                timeline.classList.add('timeline2');
                setTimeout(function() {
                    timeline.classList.remove('timeline2');
                    timeline.classList.add('timeline3');
                    const fifthText = document.querySelector('#fifth-text');
                    fifthText.classList.add('fadeIn');
                    fifthText.innerHTML = "We work about the same amount, about 8.5 to 9 hours per day.<br>The 9 to 5 work day has not seen much change.";
                    const fifthNext = document.querySelector('#fifth .icon-btn a');
                    fifthNext.classList.add('fadeIn');
                    fifthNext.innerHTML = nextBtnImg;
                }, 1000);
            }
        }, 1000);
    });

    const circles = document.querySelectorAll('#sixth li');

    /* Add event handlers for each circle image in sixth section */
    circles.forEach(function(eachCircle){
        eachCircle.addEventListener('mouseover', showMetric);
    });

    /* Set opacity of metric (numbers) to 1 if user hovers over the circle */
    function showMetric(event) {
            const circle_alt = event.target.getAttribute('alt');
            const circle_num = circle_alt[circle_alt.length - 1];
            // The circle num matches the metric num in the id's
            const metric = document.getElementById('metric' + circle_num);
            metric.classList.remove('hidden');
            metric.classList.add('fadeIn');

            const hidden = document.querySelectorAll('#sixth .hidden');
            // Once all metrics are shown, display the subtext and next button
            if (hidden.length === 0) {
                const sixthText = document.querySelector('#sixth .subtext');
                sixthText.classList.remove('subtext');
                sixthText.classList.add('fadeIn');
                sixthText.innerHTML = 'In the last decade, we have experienced constant hours of sleep, work, and survival activities.';
                const sixthNext = document.querySelector('#sixth .icon-btn a');
                sixthNext.parentElement.classList.add('fadeIn');
                sixthNext.innerHTML = nextBtnImg;
            }
    }

    /* Add onClick event handlers for the cloud images in seventh section */
    document.getElementById('cloud1').addEventListener("click", function() {
        const seventhHeader = document.querySelector('#seventh h1');
        // hide header
        seventhHeader.classList.add('fadeOut');
        const seventhText = document.getElementById('seventh-text');
        seventhText.classList.add('fadeIn');
        // replace text
        seventhText.innerHTML = "Shall we see how personal time has changed?<a href='#eighth'>Sure.</a>";

        // add smooth scroll since button is added after initial page load
        const seventhNext = seventhText.querySelector('a');
        seventhNext.addEventListener("click", smoothScroll);
    });

    /* Add onClick event handlers for cloud images in eighth section */
    /* Swap images and text with next chronological element */
    /* Lastly, reveal next button */
    document.getElementById('cloud2').addEventListener("click", function(event){
        event.target.setAttribute('src', 'images/cloud3.png');
        event.target.parentNode.setAttribute('id', 'cloud3');
        let eighthText = document.getElementById('eighth-text');
        let eighthSubText = document.getElementById('eighth-subtext');
        eighthText.innerHTML = "5 years ago";
        eighthSubText.innerHTML = "A news report in 2014 stated that Apple CEO Steve Jobs did not allow his kids to use the iPad.";


        document.getElementById('cloud3').addEventListener("click", function(event){
            eighthText = document.getElementById('eighth-text');
            eighthSubText = document.getElementById('eighth-subtext');
            event.target.setAttribute('src', 'images/cloud4.png');
            event.target.parentNode.setAttribute('id', 'cloud4');
            eighthText.innerHTML = "today";
            eighthSubText.innerHTML = "In 2019, the worldwide average for internet usage per day exceeded 6 hours.";

            document.getElementById('cloud4').addEventListener("click", function(event){
                event.target.setAttribute('src', 'images/cloud5.png');
                event.target.parentNode.setAttribute('id', 'cloud5');
                eighthText = document.getElementById('eighth-text');
                eighthSubText.style.display = "none";
                eighthText.classList.add('fadeIn');

                eighthText.innerHTML = "Unlike the other areas of life, personal time has experienced drastic change.<br>It's no question that screen time is responsible for this decrease.";
                const eighthNext = document.querySelector('#eighth .icon-btn a');
                eighthNext.classList.add('fadeIn');
                eighthNext.innerHTML = nextBtnImg;
            });
        });
    });

})();
