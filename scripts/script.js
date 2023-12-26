var ham = document.querySelector('.mplay')
var sideMenu = document.querySelector('.fixedSlider')
var sideMenuCross = document.querySelector('.fixedSlider ul li:first-child')
ham.addEventListener('click', () => {
    sideMenu.style.left = '0px'
})

sideMenuCross.addEventListener('click', () => {
    sideMenu.style.left = '-100%'
});

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>;
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>;
$(document).ready(function () {
    // add all to same gallery
    $(".boxX a").attr("data-fancybox", "mygallery");
    // assign captions and title from alt-attributes of images:
    $(".boxX a").each(function () {
        $(this).attr("data-caption", $(this).find("img").attr("alt"));
        $(this).attr("title", $(this).find("img").attr("alt"));
    });
    $(".boxX a").fancybox();
});

//Gallery
var box = document.querySelector('.boxX')
var figures = document.querySelectorAll('.boxX figure')

var cross = document.querySelector('.imaging span')
cross.addEventListener('click', () => {

})

box.addEventListener('click', (event) => {
    console.log(event)
    figures.forEach((figure), () => {

    })
})