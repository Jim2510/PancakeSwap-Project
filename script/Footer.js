const slideCard = () => {
    const cardDue = document.querySelector('.card2');
    cardDue.classList.toggle('z-20')
};

setInterval(slideCard, 3500)


const changeCard1 = document.querySelector('.u1-1')

changeCard1.addEventListener('click', () => {
    const cardUno = document.querySelector('.card1');
    cardUno.classList.toggle('z-10')
})