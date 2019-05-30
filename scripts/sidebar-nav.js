console.clear()

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));

navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
});

const ham = document.getElementById('ham');
ham.addEventListener('click', function () {
document.body.classList.toggle('nav-is-toggled');
});