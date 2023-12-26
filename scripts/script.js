var ham = document.querySelector('.mplay')
var sideMenu = document.querySelector('.fixedSlider')
var sideMenuCross = document.querySelector('.fixedSlider ul li:first-child')
ham.addEventListener('click', () => {
    sideMenu.style.left = '0px'
})

sideMenuCross.addEventListener('click', () => {
    sideMenu.style.left = '-100%'
})

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

