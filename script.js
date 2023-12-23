var ham = document.querySelector('.mplay')
var sideMenu = document.querySelector('.fixedSlider')
var sideMenuCross = document.querySelector('.fixedSlider ul li:first-child')
ham.addEventListener('click', () => {
    sideMenu.style.left = '0px'
})

sideMenuCross.addEventListener('click',()=>{
    sideMenu.style.left = '-100%'
})


// Gallery js

