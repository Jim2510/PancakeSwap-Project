const objSlider = {
    slide1: {
        logoName: "pancakeSwap",
        title: "Be Our Top 100 Traders And Earn A 3%",
        button: "Join Now"
    },
    slide2: {
        logoName: "pancakeSwap | G A L X E",
        title: "Travers The Treasure Island With Galxe",
        button: "Get Started"
    },
    slide3: {
        logoName: "pancakeSwap",
        title: "Web3 Notification (BETA) Trial Avaible",
        button: "Learn More"
    }
}

document.querySelectorAll(".buttonSlider").forEach(btn => {
    btn.addEventListener("click", (event) => {
        const cardKey = event.target.dataset.key;
        const obSlider = objSlider[cardKey];

        const containerInfo = document.querySelector("#containerInfo");
        const logoTitle = document.querySelector(".logoTitle");
        const titleSlider = document.querySelector(".titleSlider");
        const btnSlider = document.querySelector(".btnSlider");
        document.querySelectorAll('.logoTitle').forEach(el => el.remove());

        
        titleSlider.innerText = obSlider.title;
        btnSlider.innerText = obSlider.button;
        logoTitle.innerHTML = obSlider.logoName;

        containerInfo.appendChild(logoTitle);
        containerInfo.appendChild(titleSlider);
        containerInfo.appendChild(btnSlider);

        console.log(logoTitle)
    })

})

const toggleMenu = (Id) => {
    const menu = document.querySelector(Id);
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}

const showTrade = () => toggleMenu("#tradeMenu");
const hiddenTrade = () => toggleMenu("#tradeMenu");
const showEarn = () => toggleMenu("#earnMenu");
const hiddenEarn = () => toggleMenu("#earnMenu");
const showGame = () => toggleMenu("#gameMenu");
const hiddenGame = () => toggleMenu("#gameMenu");
const showNft = () => toggleMenu("#nftMenu");
const hiddenNft = () => toggleMenu("#nftMenu");
const showDot = () => toggleMenu("#dotMenu");
const hiddenDot = () => toggleMenu("#dotMenu");
const showBell = () => toggleMenu("#bell");
const hiddenWarning = () => toggleMenu("#warning");
const toggleSettings  = () => toggleMenu("#settings");