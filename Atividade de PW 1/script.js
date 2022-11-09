//initial datas
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

var modal = c('.modal');
var progress = c('.progress');
var rightModal = c('.right-modal-content');
var menuMobile = c('.menu-mobile');
var header = c('header');
var btnScroll = c('#btn-voltar');

//sticky navbar
window.onscroll = ()=>{
    window.scrollY > 100
    ? c('header').classList.add('sticky')
    : c('header').classList.remove('sticky');

    window.scrollY > 150
    ? btnScroll.style.marginBottom = '40px'
    : btnScroll.style.marginBottom = '-100px';
}

//events
c('#felipe').addEventListener('click', function(e){
        modal.style.opacity = 0;
        modal.style.display = 'flex';
        setTimeout(()=>{
            modal.style.opacity = 1;
        }, 200)

            modal.querySelector('#modal-name').innerHTML = 'Felipe de Castro';

            rightModal.querySelector('.item-01 img').src = 'img/js.png';
            rightModal.querySelector('.item-02 img').src = 'img/reactjs.png';
            rightModal.querySelector('.item-03 img').src = 'img/php.png';
            rightModal.querySelector('.item-04 img').src = 'img/laravel.png';

            rightModal.querySelector('.item-01 p').innerHTML = 'JavaScript';
            rightModal.querySelector('.item-02 p').innerHTML = 'ReactJS';
            rightModal.querySelector('.item-03 p').innerHTML = 'PHP';
            rightModal.querySelector('.item-04 p').innerHTML = 'Laravel';

            progress.querySelector('#title-01').innerHTML = 'JavaScript';
            progress.querySelector('#progress-01').innerHTML = '91.8 %';
            progress.querySelector('.progress-half-01').style.width = '91.8%';

            progress.querySelector('#title-02').innerHTML = 'ReactJS';
            progress.querySelector('#progress-02').innerHTML = '89.7 %';
            progress.querySelector('.progress-half-02').style.width = '89.7%';

            progress.querySelector('#title-03').innerHTML = 'PHP';
            progress.querySelector('#progress-03').innerHTML = '72.2 %';
            progress.querySelector('.progress-half-03').style.width = '72.2%';

            progress.querySelector('#title-04').innerHTML = 'Laravel';
            progress.querySelector('#progress-04').innerHTML = '48.9 %';
            progress.querySelector('.progress-half-04').style.width = '48.9%';
            
            c('.circle-media-01 a').href = 'https://www.facebook.com/lipe.castro.581/';
            c('.circle-media-02 a').href = 'https://www.instagram.com/felipao_cl/';
            c('.circle-media-03 a').href = 'https://twitter.com/Feliped00207991';

})

c('#victor').addEventListener('click', function(e){
        modal.style.opacity = 0;
        modal.style.display = 'flex';
        setTimeout(()=>{
            modal.style.opacity = 1;
        }, 200)
            modal.querySelector('#modal-name').innerHTML = 'Victor Junqueira';

            rightModal.querySelector('.item-01 img').src = 'img/c++.png';
            rightModal.querySelector('.item-02 img').src = 'img/linux.png';
            rightModal.querySelector('.item-03 img').src = 'img/windows.png';
            rightModal.querySelector('.item-04 img').src = 'img/unity.png';

            rightModal.querySelector('.item-01 p').innerHTML = 'C++';
            rightModal.querySelector('.item-02 p').innerHTML = 'Linux';
            rightModal.querySelector('.item-03 p').innerHTML = 'Windows Server';
            rightModal.querySelector('.item-04 p').innerHTML = 'Unity';

            progress.querySelector('#title-01').innerHTML = 'C++';
            progress.querySelector('#progress-01').innerHTML = '85.2 %';
            progress.querySelector('.progress-half-01').style.width = '85.2%';


            progress.querySelector('#title-02').innerHTML = 'Linux';
            progress.querySelector('#progress-02').innerHTML = '77.3 %';
            progress.querySelector('.progress-half-02').style.width = '77.3%';

            progress.querySelector('#title-03').innerHTML = 'Windows Server';
            progress.querySelector('#progress-03').innerHTML = '65.7 %';
            progress.querySelector('.progress-half-03').style.width = '65.7%';

            progress.querySelector('#title-04').innerHTML = 'Unity';
            progress.querySelector('#progress-04').innerHTML = '59.5 %';
            progress.querySelector('.progress-half-04').style.width = '59.5%';
            
            c('.circle-media-01 a').href = 'https://www.facebook.com/victor.junqueira.7739';
            c('.circle-media-02 a').href = 'https://www.instagram.com/victorjunqueira_/';
            c('.circle-media-03 a').href = 'https://twitter.com/V3j0ta';
});
cs('.menu-mobile nav > ul li a').forEach(element => {
    element.addEventListener('click', ()=>{
        menuMobile.style.marginRight = '-100vw';
    })
})
c('#bars').addEventListener('click', function(){
    menuMobile.style.marginRight = '0vw';
})
c('#close-mobile').addEventListener('click', function(){
    menuMobile.style.marginRight = '-100vw';
})

c('#close').addEventListener('click', closeModal);

c('#btn-voltar').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

//functions
function closeModal(){
    c('.modal').style.opacity = 0;
    setTimeout(()=>{
        modal.style.display = 'none'
    }, 700)
}

