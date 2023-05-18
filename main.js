/*TRANSITION*/
const hiddenElement = document.querySelectorAll('.hidden')
const links = document.querySelectorAll('.navbar__link')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')

            links.forEach(link => {
                const href = link.getAttribute("href").split('#')[1]
                const id = entry.target.id

                if (href === id) {
                    link.classList.add('link--active')
                } else {
                    link.classList.remove('link--active')
                }
            })

        }// else {  entry.target.classList.remove('show')}
    })
}, {
    threshold: 0.5
})

hiddenElement.forEach(element => observer.observe(element))

/*NAVBAR SHOW*/
const navbar = document.getElementById('navbar')
const showNavbar = document.getElementById('showNavbar')


showNavbar.addEventListener('click', () => {
    navbar.classList.toggle('show')
})


/*PARALLAX*/
window.onscroll = () => {
    let position = window.pageYOffset && document.documentElement.scrollTop


    const parallax = document.getElementById('parallax')
    parallax.style.bottom = position * 0.1 + "px"
}

/*HOVER VIDEO*/
const videos = document.querySelectorAll('.project__img')
for (let video of videos) {

    video.addEventListener('mouseenter', () => {
        video.play()

    })

    video.addEventListener('mouseout', () => {
        video.pause()
    })
}

/*FORM*/
const formBtn = document.getElementById('formBtn')

formBtn.addEventListener('click', e => {
    e.preventDefault()
    const name = document.getElementById('inputName').value
    const email = document.getElementById('inputEmail').value
    const text = document.getElementById('inputText').value
    window.location.href = `mailto:garciacruzfabian23@gmail.com?body=Nombre%3D${name}%0ACorreo%3D${email}%0AMensaje%3D${text}`
})