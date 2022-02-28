// menu left

document.querySelector('.menu__icon').addEventListener('click', function () {
    document.querySelector('.wrap-menu__left').classList.add('show');
}) ;
document.querySelector('.close__menu').addEventListener('click', function () {
    document.querySelector('.wrap-menu__left').classList.remove('show');
}) ;