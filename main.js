const toggles = document.querySelectorAll('.btn-toggle');
const questions = document.querySelectorAll('.quest');
const answers = document.querySelectorAll('.ans');
const more = document.querySelectorAll('.btn-toggle');
const less = document.querySelectorAll('.btn-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
