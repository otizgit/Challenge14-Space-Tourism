const moon = document.querySelector('.moon')
const mars = document.querySelector('.mars')
const europa = document.querySelector('.europa')
const titan = document.querySelector('.titan')
const planetImg = document.querySelector('.planet-img')
const destSect = document.querySelector('.dest-sect')
const destNav = document.querySelector('.dest-nav')


moon.addEventListener('click', function(){
    planetImg.src = "./starter-code/assets/destination/image-moon.png"
    destSect.innerHTML = `
                    <p class="space dest-space">MOON</p>
                    <p class="sub dest-sub">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p> <hr class="hr" size="1" color="ececec">
                    <div class="track">
                        <div class="distance">
                            <p class="d-top">Avg. distance</p>
                            <p class="d-bottom bottom1">384,400 km</p>
                        </div>
                        <div class="time">
                            <p class="d-top">Est. travel time</p>
                            <p class="d-bottom bottom2">3 days</p>
                        </div>
                    </div>`
    moon.classList.add('active')
})

mars.addEventListener('click', function(){
    planetImg.src = "./starter-code/assets/destination/image-mars.png"
    destSect.innerHTML = `
                    <p class="space dest-space">MARS</p>
                    <p class="sub dest-sub">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                        the tallest planetary mountain in our solar system. It’s two and a half times 
                        the size of Everest!
                    </p> <hr class="hr" size="1" color="ececec">
                    <div class="track">
                        <div class="distance">
                            <p class="d-top">Avg. distance</p>
                            <p class="d-bottom bottom1">225 mil. km</p>
                        </div>
                        <div class="time">
                            <p class="d-top">Est. travel time</p>
                            <p class="d-bottom bottom2">9 months</p>
                        </div>
                    </div>`
    mars.classList.add('active')
})

europa.addEventListener('click', function(){
    planetImg.src = "./starter-code/assets/destination/image-europa.png"
    destSect.innerHTML = `
                    <p class="space dest-space">EUROPA</p>
                    <p class="sub dest-sub">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                        ice skating, curling, hockey, or simple relaxation in your snug 
                        wintery cabin.
                    </p> <hr class="hr" size="1" color="ececec">
                    <div class="track">
                        <div class="distance">
                            <p class="d-top">Avg. distance</p>
                            <p class="d-bottom bottom1">628 mil. km</p>
                        </div>
                        <div class="time">
                            <p class="d-top">Est. travel time</p>
                            <p class="d-bottom bottom2">3 years</p>
                        </div>
                    </div>`
    europa.classList.add('active')
})

titan.addEventListener('click', function(){
    planetImg.src = "./starter-code/assets/destination/image-mars.png"
    destSect.innerHTML = `
                    <p class="space dest-space">TITAN</p>
                    <p class="sub dest-sub">
                        The only moon known to have a dense atmosphere other than Earth, Titan 
                        is a home away from home (just a few hundred degrees colder!). As a 
                        bonus, you get striking views of the Rings of Saturn.
                    </p> <hr class="hr" size="1" color="ececec">
                    <div class="track">
                        <div class="distance">
                            <p class="d-top">Avg. distance</p>
                            <p class="d-bottom bottom1">1.6 bil. km</p>
                        </div>
                        <div class="time">
                            <p class="d-top">Est. travel time</p>
                            <p class="d-bottom bottom2">7 years</p>
                        </div>
                    </div>`
    titan.classList.add('active')
})

destNav.onclick = function(e){
    if (e.target.id !== 'dest-nav-ul' && e.target.id !== 'mars'){
        mars.classList.remove('active')
    }
    if (e.target.id !== 'dest-nav-ul' && e.target.id !== 'moon'){
        moon.classList.remove('active')
    }
    if (e.target.id !== 'dest-nav-ul' && e.target.id !== 'europa'){
        europa.classList.remove('active')
    }
    if (e.target.id !== 'dest-nav-yul' && e.target.id !== 'titan'){
        titan.classList.remove('active')
    }
}