const btnTop = document.getElementById('topBtn')

onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
}
const buttonTop = () => document.documentElement.scrollTop = 0;
/* colors light mode:
1st svg => bg-[#FAF9FA] fill-[#D8CBED]
discover ecosystem => discover text-[#280D5F] eco=> text-colorsSecondary
card => bg-white
button buy cake text-white 
2nd svg => bg-[#FAF9FA] fill-[#72B8F2]

*/
