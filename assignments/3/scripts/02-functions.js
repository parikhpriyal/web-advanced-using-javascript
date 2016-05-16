//open modal for sign in
function popup(){
    if(mq720.matches || mq960.matches){
        modal.style.visibility = 'visible';
        modal.style.zIndex = '30';
    }
    else{
        modal.style.visibility = 'visible';
        modal.style.marginTop = '72px';
        modal.style.transition = 'all 500ms ease-in-out';    
    }
}

//close signin modal
function closeup(){
    if(mq720.matches || mq960.matches){
        modal.style.visibility = 'hidden';
    }
    else{
        modal.style.visibility = 'hidden';
        modal.style.marginTop = '-100%';
        modal.style.transition = 'all 500ms ease-in-out';   
    }
}

function loadnew(){
    var page = window.location.href;
    page = page.replace('/', ',');
    page = page.replace('/', ',');
    page = page.replace('/', ',');
    page = page.replace('?', ',');
    var page_array = page.split(',');   

    if(page_array[3] == 'sign.html'){
        document.myform.action = 'index.html';
    }else{
        name =  document.getElementById('username').value;
        password =  document.getElementById('pass').value;
        if(name == 'priyal' && password == 'test123'){
            document.myform.action = 'sign.html';
        }
        else{
            modal.style.display = 'block';
            password.value = '';
        }
    }
}

//showMenu show @media screen < 720px
function showMenu(){
    if(!down){
        nav.style.marginTop = '0';
        nav.style.transition = 'all 0.5s ease-in-out';
        navBorder.style.transition = 'transform .3s linear';
        navBorder.style.transform = 'rotate(180deg)';    
    }
    else{
        nav.style.marginTop = '-100%';
        nav.style.transition = 'all 0.5s ease-in-out';
        navBorder.style.transition = 'transform .3s linear';
        navBorder.style.transform = 'rotate(0deg)';
    }
    down = !down;   
}

//content slider
function slideshow(e){
    links[bulletLink].classList.add('active');
    sliderWidth = windo.offsetWidth;
    
    for(var i = 0; i < links.length; i++){
        links[i].classList.remove('active');
    }

    var clickedLink = e.target;
    bulletLink = clickedLink.currentTarget;

    clickedLink.classList.add('active');
    
    if(0 === bulletLink){
        windo.style.marginLeft = '0';
    }else if (1 === bulletLink){
        windo.style.marginLeft = -1*sliderWidth/3 + 'px';
    }else{
        windo.style.marginLeft = -2*(sliderWidth/3) + 'px';
    }
}

// open how.html in new window on button click
function pageNew(){
    window.open('how.html', '_self', false);
}   