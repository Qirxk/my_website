window.addEventListener("scroll", function (event) {

    let navigationLinks = document.querySelectorAll('nav ul li a')
    let fromTop = window.scrollY


    navigationLinks.forEach(function (link) {

        let section = document.querySelector(link.hash)

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            console.log(link)
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })
})