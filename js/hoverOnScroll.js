window.addEventListener("scroll", function (event) {

    let navigationLinks = document.querySelectorAll('nav ul li a')
    let fromTop = window.scrollY


    navigationLinks.forEach(function (link) {

        let section = document.querySelector(link.hash)

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            for(var i = 0; i<link.clientHeight; i++){
                link.classList.remove('active')
            } 
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })
})
// window.on("load", function(){
//     var firstLinks = document.getElementsById("first_link")
//     firstLinks.classList.add("active")
// })