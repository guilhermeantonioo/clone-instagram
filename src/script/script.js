let btn = document.querySelector('.logo');
let body = document.querySelector('body')
let footer = document.querySelector('footer')


btn.addEventListener('click' , () =>{
    console.log('clicou na logo')
    body.classList.toggle('toggle-mode')
    footer.classList.toggle('toggle-mode')
})