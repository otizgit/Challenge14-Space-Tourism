const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const nav3 = document.querySelector('.nav3')
const nav4 = document.querySelector('.nav4')
const crewImg = document.querySelector('.crew-img')
const crewTexts = document.querySelector('.crew-texts')
const navigation = document.querySelector('.navigation')

nav1.addEventListener('click', function(){
    crewImg.src = "./starter-code/assets/crew/image-douglas-hurley.png"
    crewImg.style.width = '380px'
    crewTexts.innerHTML = `
    <p class="top-p crew-top-p">Commander</p>
    <p class="space crew-name">Douglas Hurley</p>
    <p class="sub crew-sub">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.
    </p>`
    nav1.classList.add('navigation-active')
})

nav2.addEventListener('click', function(){
    crewImg.src = "./starter-code/assets/crew/image-mark-shuttleworth.png"
    crewImg.style.width = '300px'
    crewTexts.innerHTML = `
    <p class="top-p crew-top-p">Mission Specialist</p>
    <p class="space crew-name">Mark Shuttleworth</p>
    <p class="sub crew-sub">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist.
    </p>`
    nav2.classList.add('navigation-active')
})

nav3.addEventListener('click', function(){
    crewImg.src = "./starter-code/assets/crew/image-victor-glover.png"
    crewImg.style.width = '380px'
    crewTexts.innerHTML = `
    <p class="top-p crew-top-p">Pilot</p>
    <p class="space crew-name">Victor Glover</p>
    <p class="sub crew-sub">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer.
    </p>`
    nav3.classList.add('navigation-active')
})

nav4.addEventListener('click', function(){
    crewImg.src = "./starter-code/assets/crew/image-anousheh-ansari.png"
    crewImg.style.width = '380px'
    crewTexts.innerHTML = `
    <p class="top-p crew-top-p">Flight Engineer</p>
    <p class="space crew-name">Anousheh Ansari</p>
    <p class="sub crew-sub">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space. 
    </p>`
    nav4.classList.add('navigation-active')
})

navigation.onclick = function(e){
    if (e.target !== nav1){
        nav1.classList.remove('navigation-active')
    }
    if (e.target !== nav2){
        nav2.classList.remove('navigation-active')
    }
    if (e.target !== nav3){
        nav3.classList.remove('navigation-active')
    }
    if (e.target !== nav4){
        nav4.classList.remove('navigation-active')
    }
}