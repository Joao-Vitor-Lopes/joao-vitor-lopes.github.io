function toggleMode() {

    const html = document.documentElement
    html.classList.toggle("darkmode")


    const img1 = document.querySelector("#logojs")

    const img2 = document.querySelector("#imgprimary")

    const img3 = document.querySelector(".footer-logo")
    

    if(html.classList.contains("darkmode")){

        img1.setAttribute("src", "fotos/logotipo-darkmode.svg")
        img2.setAttribute("src", "fotos/fotodesign-darkmode.svg")
        img3.setAttribute("src", "fotos/logotipo-darkmode.svg")
    } else {
        img1.setAttribute("src", "fotos/logotipo.svg")
        img2.setAttribute("src", "fotos/fotodesign.svg")
        img3.setAttribute("src", "fotos/logotipo.svg")
    }
}