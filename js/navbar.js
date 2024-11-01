const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.menu-bar');
const mobileLinks = document.querySelectorAll('.navbar-mobile a');

button.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
})

mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileNavbar.classList.remove('active');
    });
});
