const header = document.getElementById('main-header');
const toggler = document.getElementById('toggler');
toggler.addEventListener('click', () => {
    if(toggler.classList.length === 1){
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
})