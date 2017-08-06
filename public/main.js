var app = new Vue({
    el: '#app',
    methods:{
        scrollTo: function(element){
            document.querySelector(element).scrollIntoView({ 
                behavior: 'smooth' 
            });      
        },

        showMenu: function(){
            var nav = document.getElementById('nav');
            if(nav.classList.contains('mobile-hide')){
                nav.classList.remove('mobile-hide');
            }else{
                nav.classList.add('mobile-hide');
            }
        }
    }
});

window.onscroll = function(){
    scrollDetected()
};

function scrollDetected(){
    var scrollPos = getScrollPos();
    headerStyle(scrollPos);
    highlightMenu(scrollPos);
}

function highlightMenu(scrollPos){
    var menuItems = document.querySelectorAll('#menu-links li');
    var activeItem = null;
    for(var i=0; i<menuItems.length; i++){
        var ref = menuItems[i].getAttribute('data-link');
        var refElement = document.getElementById(ref);
        menuItems[i].classList.remove('active');
        if(refElement.offsetTop < scrollPos + window.innerHeight){
            activeItem = menuItems[i];
        }
    }
    activeItem.classList.add('active');
}

function headerStyle(scrollPos){
    var topline = document.getElementById('top-line');
    if (scrollPos > 10) {
        if(topline.className == 'header-original' || topline.className == ''){
            topline.className = 'header-changed';   
        }
    }else{
        if(topline.className == 'header-changed'){
            topline.className = 'header-original';
        }
    }
}

function getScrollPos() {
    var win = window.pageYOffset ? window.pageYOffset : 0;
    var docElement = document.documentElement ? document.documentElement.scrollTop : 0;
    var body = document.body ? document.body.scrollTop : 0;
	if(win > 0){
        return win;
    }
    if(docElement > 0){
        return docElement;
    }
    return body;
}