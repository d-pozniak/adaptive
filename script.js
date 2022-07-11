const btn__burger = document.querySelector('#btn-burger');
const btn__close = document.querySelector('#btn-close');
const dropdown = document.querySelector('#dropdown');


btn__burger.addEventListener('click', function(){
    dropdown.classList.add('menu-open');

    btn__close.addEventListener('click', function(){

        dropdown.classList.replace('menu-open', 'menu-closedr')
    })
})