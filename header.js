window.onload = function() {
    document.querySelector('.header-burger').addEventListener('click', function() {
        document.querySelector('.header-burger').classList.toggle('active')
        document.querySelector('.header-menu').classList.toggle('active')
        document.querySelector('.settings').classList.toggle('active')
    })
}