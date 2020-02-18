console.log('reading js');
'use strict';

var item1 = document.querySelector('#item1');
var item2 = document.querySelector('#item2');
var item3 = document.querySelector('#item3');
var item4 = document.querySelector('#item4');

var item1overlay = document.querySelector('#item1overlay');
var item1close = document.querySelector('#item1close');

var item2overlay = document.querySelector('#item2overlay');
var item2close = document.querySelector('#item2close');

var item3overlay = document.querySelector('#item3overlay');
var item3close = document.querySelector('#item3close');

var item4overlay = document.querySelector('#item4overlay');
var item4close = document.querySelector('#item4close');

item1.addEventListener('click', function () {
    item1overlay.style.display='block';
    
})
item1close.addEventListener('click', function (){
    item1overlay.style.display = 'none';
})

item2.addEventListener('click', function () {
    item2overlay.style.display='block';
})
item2close.addEventListener('click', function (){
    item2overlay.style.display = 'none';
})

item3.addEventListener('click', function () {
    item3overlay.style.display='block';
})
item3close.addEventListener('click', function (){
    item3overlay.style.display = 'none';
})

item4.addEventListener('click', function (){
    item4overlay.style.display = 'block';
})
item4close.addEventListener('click', function (){
    item4overlay.style.display = 'none';
})
