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

        const slider = document.querySelector(".slider");
        const logoTitle = document.querySelector(".logoTitle");
        const titleSlider = document.querySelector(".titleSlider");
        const btnSlider = document.querySelector(".btnSlider");
        document.querySelectorAll('.logoTitle').forEach(el => el.remove());

        logoTitle.innerText = obSlider.logoName;
        titleSlider.innerText = obSlider.title;
        btnSlider.innerText = obSlider.button;

        slider.appendChild(btnSlider);
        slider.appendChild(titleSlider);
        slider.appendChild(logoTitle);
        console.log(logoTitle);
    })

})

const showTrade = () => {
    document.querySelector("#tradeMenu").classList.toggle("hidden")
    document.querySelector("#tradeMenu").classList.toggle("flex")
}

const hiddenTrade = () => {
    document.querySelector("#tradeMenu").classList.toggle("hidden")
    document.querySelector("#tradeMenu").classList.toggle("flex")
}
const showEarn = () => {
    document.querySelector("#earnMenu").classList.toggle("hidden")
    document.querySelector("#earnMenu").classList.toggle("flex")
}

const hiddenEarn = () => {
    document.querySelector("#earnMenu").classList.toggle("hidden")
    document.querySelector("#earnMenu").classList.toggle("flex")
}

const showGame = () => {
    document.querySelector("#gameMenu").classList.toggle("hidden")
    document.querySelector("#gameMenu").classList.toggle("flex")
}

const hiddenGame = () => {
    document.querySelector("#gameMenu").classList.toggle("hidden")
    document.querySelector("#gameMenu").classList.toggle("flex")
}

const showNft = () => {
    document.querySelector("#nftMenu").classList.toggle("hidden")
    document.querySelector("#nftMenu").classList.toggle("flex")
}

const hiddenNft = () => {
    document.querySelector("#nftMenu").classList.toggle("hidden")
    document.querySelector("#nftMenu").classList.toggle("flex")
}

const showDot = () => {
    document.querySelector("#dotMenu").classList.toggle("hidden")
    document.querySelector("#dotMenu").classList.toggle("flex")
}

const hiddenDot = () => {
    document.querySelector("#dotMenu").classList.toggle("hidden")
    document.querySelector("#dotMenu").classList.toggle("flex")
}