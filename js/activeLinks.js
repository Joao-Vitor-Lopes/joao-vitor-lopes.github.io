let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('.navbar .nav-content .links li a')
window.onscroll=()=> {
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('.navbar .nav-content .links li a[href*='+id+']').classList.add('active')
            })
        }

    })

}