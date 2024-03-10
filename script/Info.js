const btnTop = document.getElementById('topBtn')

onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
}
const buttonTop = () => document.documentElement.scrollTop = 0;