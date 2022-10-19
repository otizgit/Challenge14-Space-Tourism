const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.main-nav')
const listItems = document.querySelectorAll('.main-nav ul li')
const hamImg = document.querySelector('.ham-img')

hamburger.addEventListener('click', function(){
    nav.classList.toggle('display-nav')
    // if (nav.classList = 'display-nav'){
    //     hamImg.src = "./starter-code/assets/shared/icon-close.svg"
    // }
    // else if (nav.classList.remove('display-nav')) {
    //     hamImg.src = "./starter-code/assets/shared/icon-hamburger.svg"
    // }
    listItems.forEach(function(list){
        list.classList.toggle('display-list')
    })
})

