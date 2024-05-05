const poster = document.querySelectorAll('.poster-container')
const scrollLeftButton = document.getElementById('scrollLeft')
const scrollRightButton = document.getElementById('scrollRight')

const scrollAmount = 300

scrollLeftButton.onclick = function(){
    console.log('Trouxa')
    poster.scrollBy({left:-scrollAmount, behavior: 'smooth'})
}

scrollRightButton.onclick = function(){
    console.log('Trouxa')
    poster.scrollBy({left:scrollAmount, behavior: 'smooth'})
}