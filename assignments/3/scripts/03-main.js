window.onload = function () {
    'use strict';

    mq720 = window.matchMedia('(max-width: 720px)');
    mq960 = window.matchMedia('(max-width: 720px)');

    //sign up modal show
    modal = document.getElementById('modal');
    signin = document.getElementById('sign'); 
    close = document.getElementById('close');
    submit = document.getElementById('submit');

    signin.addEventListener('click', popup, false);
    close.addEventListener('click', closeup, false);
    submit.addEventListener('click', loadnew, false);

    //showMenu show @media screen < 720px
    navBorder = document.getElementById('nav-border');
    nav = document.getElementsByTagName('nav')[0];

    navBorder.addEventListener('click', showMenu, false);
    down = false;

    //content slider 
    links = document.querySelectorAll('#nav-links > ul > li');
    windo = document.getElementById('slide-container');
    bulletLink = 0;

    for(var i = 0; i< links.length; i++){
        var link = links[i];
        link.addEventListener('click', slideshow, false);        
        link.currentTarget = i;
    }

    //open how it works page using button
    button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', pageNew, false);
};