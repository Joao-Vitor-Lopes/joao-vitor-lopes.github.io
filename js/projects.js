/* Pessoais 

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage()
}, 3500);

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }


    document.getElementById("radio"+count).checked = true;
}
*/
/* Institucionais */
(function() {
    let count = 1;
    document.getElementById("radio1-custom").checked = true;

    setInterval(function() {
        nextImage();
    }, 10000);

    function nextImage() {
        count++;
        if (count > 3) {
            count = 1;
        }

        document.getElementById("radio" + count + "-custom").checked = true;
    }
})();

