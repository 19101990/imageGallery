const current = document.querySelector('#current')
const images = document.querySelectorAll('.images img')
const opacity = 0.3

images[0].style.opacity=opacity

images.forEach(img => 
    img.addEventListener('click', changeImg)
);

function changeImg(e) {
    images.forEach(img => img.style.opacity = 1)
    current.src = e.target.src
    current.classList.add('fade-in')
    setTimeout(()=>current.classList.remove('fade-in'), 500)
    e.target.style.opacity = opacity
}