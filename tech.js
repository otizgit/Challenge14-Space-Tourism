const techNav = document.getElementsByClassName('tech')
const techMainContent = document.querySelector('.tech-main-content')
const techImg = document.querySelector('.tech-img')
const techNavContainer = document.querySelector('.tech-nav')

techNav[1].addEventListener('click', function(){
    techImg.src = "./starter-code/assets/technology/image-space-capsule-portrait.jpg"
    techMainContent.innerHTML = `
    <p class="top-p">the terminology...</p>
    <p class="space tech-space">Space capsule</p>
    <p class="sub">
    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.
    </p>`
    techNav[1].classList.add('tech-active')
})

techNav[2].addEventListener('click', function(){
    techImg.src = "./starter-code/assets/technology/image-spaceport-portrait.jpg" 
    techMainContent.innerHTML = `
    <p class="top-p">the terminology...</p>
    <p class="space tech-space">Spaceport</p>
    <p class="sub">
    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.
    </p>`
    techNav[2].classList.add('tech-active')
})
techNav[0].addEventListener('click', function(){
    techImg.src = "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
    techMainContent.innerHTML = `
    <p class="top-p">the terminology...</p>
    <p class="space tech-space">LAUNCH VEHICLE</p>
    <p class="sub">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
        it's quite an awe-inspiring sight on the launch pad!
    </p>`
    techNav[0].classList.add('tech-active')
})

techNavContainer.onclick = function(e){
    if (e.target !== techNav[0] && e.target !== techNavContainer){
        techNav[0].classList.remove('tech-active')
    }
    if (e.target !== techNav[1] && e.target !== techNavContainer){
        techNav[1].classList.remove('tech-active')
    }
    if (e.target !== techNav[2] && e.target !== techNavContainer){
        techNav[2].classList.remove('tech-active')
    }
}