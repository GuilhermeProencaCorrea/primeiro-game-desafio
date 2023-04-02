const personagem = document.querySelector('.personagem');
const cacto = document.querySelector('.cacto');

const pulo = () => {
    personagem.classList.add('pulo');

    setTimeout(() => {

        personagem.classList.remove('pulo');
        
    }, 500);
}

const loop = setInterval(() => {

    const cactoPosição = cacto.offsetLeft;
    const personagemPosição = +window.getComputedStyle(personagem).bottom.replace('px','');

    if(cactoPosição <= 180 && cactoPosição > 0 && personagemPosição < 100){

        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosição}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosição}px`;
        
        personagem.src = './img/morte.gif';
        personagem.style.width = '350px';
        personagem.style.marginleft = '22px auto' 
        personagem.style.marginheith = '22px'
        /*personagem.style.bottom = '-2px'*/
       



        clearInterval(loop);

    }


},10);

document.addEventListener('keydown', pulo)
