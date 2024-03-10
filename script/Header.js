const objSlider = {
   slide1: {
      logoName: "PancakeSwap",
      colorLogoName: "white",
      secLogo: "../assets/img/nemesis.png",
      colorTitle: "#FFB237",
      title: "Nemesis Downfall Now Live on PancakeSwap Gaming Marketplace",
      button: "Play Now",
      link: "Learn More",
      bg: "bg-firstBanner",
      bgBtn: "#702d25",
      colorTextBtn: "white",
      float: "https://assets.pancakeswap.finance/web/banners/nemesis-downfall/bg-desktop.png"
   },
    slide2: {
        logoName: "pancakeSwap",
        colorLogoName: "black",
        colorTitle: "#a881fc",
        title: "Be Our Top 100 Traders And Earn A 3% Trading Fee Rebate!",
        button: "Join Now",
        link: "",
        bg: "bg-secondBanner",
        bgBtn: "none",
        colorTextBtn: "#a881fc",
        float: "https://assets.pancakeswap.finance/web/banners/top-traders/bg-desktop.png'"
    },
    slide3: {
        logoName: "PERPETUAL FUTURES",
        colorLogoName: "#d19232",
        colorTitle: "#ffffff",
        title: "Travers The Treasure Island With Galxe",
        button: "Get Started",
        link: "",
        bg: "bg-thirdBanner",
        bgBtn: "#1fc7d4",
        colorTextBtn: "#000",
        float: "../assets/img/bunnybell.webp"
    },
    slide4: {
        logoName: "pancakeSwap",
        colorTitle: "#ffeb37",
        title: "Web3 Notification (BETA) Trial Avaible",
        button: "Learn More",
        link: "",
        bgBtn: "none",
        bg: "bg-fourthBanner",
        colorTextBtn: "#07f9c0"
    },
    slide5: {
        logoName: "pancakeSwap | G A L X E",
        secLogo: "",
        colorTitle: "#ffeb37",
        title: "Web3 Notification (BETA) Trial Avaible",
        button: "Learn More",
        link: "",
        bg: "bg-fifthBanner",
        bgBtn: "#1fc7d4",
        colorTextBtn: "white"
    },
    slide6: {
        logoName: "pancakeSwap",
        secLogo: "",
        colorTitle: "#ffd937",
        title: "Web3 Notification (BETA) Trial Avaible",
        button: "Learn More",
        link: "",
        bg: "bg-sixthBanner",
        bgBtn: "white",
        colorTextBtn: "#1fd1e7"
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const firstButton = document.querySelector(".buttonSlider");
  firstButton.click();
});

document.querySelectorAll(".buttonSlider").forEach(btn => {
    btn.addEventListener("click", (event) => {
        const cardKey = event.target.dataset.key;
        const obSlider = objSlider[cardKey];
        const imgRight = document.querySelector("#imgRight");
        const bg = document.querySelector("#background");
        const container = document.querySelector("#containerinfo");
        const logoTitle = document.querySelector("#logoTitle");
        const secLogo = document.querySelector("#secLogo")
        const titleSlider = document.querySelector("#description");
        const btnSlider = document.querySelector("#mbb");
        const link = document.querySelector("#link");
        document.querySelectorAll('.logoTitle').forEach(el => el.remove());

        if (obSlider.bg) {
          bg.classList.remove("blur-sm"); // Rimuovi la classe di sfocatura
        }

        if(!secLogo){
          secLogo.style.display = "none"
        }

        imgRight.src = obSlider.float

        bg.classList.remove("bg-firstBanner", "bg-secondBanner", "bg-thirdBanner", "bg-fourthBanner", "bg-fifthBanner", "bg-sixthBanner");
        bg.classList.add(obSlider.bg);

        
        btnSlider.style.background = obSlider.bgBtn

        titleSlider.style.color = obSlider.colorTitle;

        btnSlider.style.color = obSlider.colorTextBtn;
       
   
      
       


        console.log(logoTitle);

       
        titleSlider.innerText = obSlider.title;
        logoTitle.style.color = obSlider.colorLogoName;
        btnSlider.innerText = obSlider.button;
        logoTitle.innerHTML = obSlider.logoName;
        secLogo.src = obSlider.secLogo;
        link.innerText = obSlider.link;


        console.log(logoTitle)
    })

})

const toggleMenu = (Id) => {
    const menu = document.querySelector(Id);
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}

// const toggleSetting = () => {
//     const settingButton = document.querySelector('.settingButton');
//     settingButton.classList.toggle("text-colorsPrimary");
//     settingButton.classList.toggle("bg-navLinkHover");
//     settingButton.classList.toggle("text-black");
//     settingButton.classList.toggle("bg-colorsPrimary");
// }

function toggleSetting(btnId) {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      if (button.id === btnId) {
        button.classList.add('text-black', 'bg-colorsPrimary');
        button.classList.remove('text-colorsPrimary', 'bg-navLinkHover');
      } else {
        button.classList.remove('text-black', 'bg-colorsPrimary');
        button.classList.add('text-colorsPrimary', 'bg-navLinkHover');
      }
    });
  }

  function toggleConnects(btnId) {
    const buttons = document.querySelectorAll(".connect");

    buttons.forEach(button => {
        if (button.id === btnId) {
            button.classList.add('bg-[#372f47]', 'text-[#b8add2]');
            button.classList.remove('bg-[#b8add2]', 'text-[#372f47]');
        } else {
            button.classList.remove('bg-[#372f47]', 'text-[#b8add2]');
            button.classList.add('bg-[#b8add2]', 'text-[#372f47]');
        }
    });
  }

  function handleInnerClick(event) {
    event.stopPropagation();
  }

const showBell = () => toggleMenu("#bell");
const hiddenWarning = () => toggleMenu("#warning");
const toggleSettings  = () => toggleMenu("#settings");
const toggleConnect = () => toggleMenu("#connect")