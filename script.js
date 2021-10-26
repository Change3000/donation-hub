
                            var x= document.getElementsById("login");
                             var y = document.getElementsById("register");
                              var z= document.getElementsById("btn");
                            function register()
                            {
                                x.style.left='-400px';
                                y.style.left='50px';
                                z.style.left='110px';
                            
                            } 
                            function login()
                            {
                                x.style.left = '50px';
                                y.style.left = '450px';
                                z.style.left = '0px';
                            }
                        
                
                            var modal= document.getElementsById('loginForm');
                            window.onclick= function(event)
                            {
                                if(event.target==modal)
                                {
                                    modal.style.display="none";
                                }
                            }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}