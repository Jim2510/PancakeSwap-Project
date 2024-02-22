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