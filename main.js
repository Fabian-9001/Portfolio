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

        } else {
            entry.target.classList.remove('show')
        }
    })
}, {
    threshold: 0.5
})

hiddenElement.forEach(element => observer.observe(element))

/*COLORS*/

const navbar = document.getElementById('navbar')
const showNavbar = document.getElementById('showNavbar')


showNavbar.addEventListener('click', () => {
    navbar.classList.toggle('show')
})
console.log(navbar)


/*PARALLAX*/ 
window.onscroll = () => {
    let position = window.pageYOffset && document.documentElement.scrollTop


    const parallax = document.getElementById('parallax')
    parallax.style.bottom = position * 0.1 + "px"
}