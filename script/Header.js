const objSlider = {
  slide1: {
    logoName: "PancakeSwap",
    colorLogoName: "white",
    secLogo: "../assets/img/nemesis.png",
    colorTitle: "#FFB237",
    title: "Nemesis Downfall Now Live on PancakeSwap Gaming Marketplace",
    title2: "",
    fontTitle: "18px",
    colorTitle2: "#280d5f",
    button: "Play Now",
    link: "Learn More",
    bg: "bg-firstBanner",
    bgBtn: "#702d25",
    colorTextBtn: "white",
    float:
      "https://assets.pancakeswap.finance/web/banners/nemesis-downfall/bg-desktop.png",
    floatPos: "10%",
    floatPng:
      "https://assets.pancakeswap.finance/web/banners/nemesis-downfall/floating-item.png",
    floatPngW: "99px",
    borderTxt: "2px",
    borderTxtClr: "#702d25",
  },
  slide2: {
    logoName: "pancakeSwap",
    colorLogoName: "black",
    colorTitle: "#7645d9",
    title: "Be Our Top 100 Traders And Earn A 3% Trading Fee Rebate!",
    title2: "",
    fontTitle: "18px",
    colorTitle2: "#280d5f",
    button: "Join Now",
    link: "",
    bg: "bg-secondBanner",
    bgBtn: "none",
    colorTextBtn: "#7645d9",
    float: "../assets/img/whale.png",
    floatPos: "10%",
    floatPng: "../assets/img/floating-item.png",
    floatPngW: "85px",
    borderTxt: "1px",
    borderTxtClr: "#fff",
    fontSize: "28px",
  },
  slide3: {
    logoName: "PERPETUAL FUTURES",
    colorLogoName: "#d19232",
    colorTitle: "#ffffff",
    title: "UP TO 1001x LEVERAGE",
    title2: "",
    fontTitle: "18px",
    colorTitle2: "#280d5f",
    button: "Trade Now",
    link: "",
    bg: "bg-thirdBanner",
    bgBtn: "#1fc7d4",
    colorTextBtn: "#fff",
    float: "../assets/img/bn.png",
    floatPos: "35%",
    borderTxt: "1px",
    borderTxtClr: "#693ec0",
    fontSize: "38px",
  },
  slide4: {
    logoName: "pancakeSwap",
    colorTitle: "#ffeb37",
    colorLogoName: "white",
    title: "PancakeSwap Gaming MarketPlace",
    title2: "Explore Your GameFi Spirit ❤ 1.5M Monthly Players Await!",
    fontTitle: "18px",
    colorTitle2: "#f6e13a",
    button: "Learn More",
    link: "",
    bgBtn: "none",
    bg: "bg-fourthBanner",
    colorTextBtn: "#07f9c0",
    float: "../assets/img/game-desktop-bunny.webp",
    floatPos: "40%",
    floatPng: "../assets/img/game-cube.webp",
    floatPngW: "55px",
    borderTxt: "1px",
    borderTxtClr: "#6cf087",
    fontSize: "28px",
  },
  slide5: {
    logoName: "pancakeSwap |",
    colorLogoName: "white",
    secLogo: "../assets/img/galxe-logo.7705eef0.png",
    colorTitle: "#ffeb37",
    title: "Travers The Treasure Islands On Galxe",
    title2: "Claim Your Exclusive NFTs Now!",
    fontTitle: "28px",
    colorTitle2: "#280d5f",
    button: "Learn More",
    link: "",
    bg: "bg-fifthBanner",
    bgBtn: "#1fc7d4",
    colorTextBtn: "white",
    floatPng: "../assets/img/galxe-traverse-bunny.webp",
    floatPngW: "262px",
    borderTxt: "2px",
    borderTxtClr: "#702d25",
    fontSize: "28px",
  },
  slide6: {
    logoName: "pancakeSwap",
    secLogo: "",
    colorLogoName: "white",
    colorTitle: "#ffd937",
    title: "Web3 Notification (BETA) Trial Avaible",
    title2: "All Your DeFi Updates, All In One Place",
    fontTitle: "28px",
    colorTitle2: "#280d5f",
    button: "Learn More",
    link: "",
    bg: "bg-sixthBanner",
    bgBtn: "white",
    colorTextBtn: "#1fd1e7",
    float: "../assets/img/bunnybell.webp",
    floatPos: "55%",
    floatPng: "../assets/img/web3-notification-check.webp",
    floatPngW: "81px",
    borderTxt: "2px",
    borderTxtClr: "#7645d9",
    fontSize: "28px",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 1; // Indice della slide attuale

  // Funzione per mostrare la prossima slide
  function showNextSlide() {
    const currentButton = document.querySelector(
      `.buttonSlider[data-key='slide${currentIndex}']`
    );
    currentButton.click(); // Simula il clic sul pulsante della slide corrente
    currentIndex = (currentIndex % 6) + 1; // Passa all'indice della prossima slide, tornando alla prima se si raggiunge l'ultima
  }

  // Mostra la prima slide
  showNextSlide();

  // Imposta un intervallo per passare automaticamente alla prossima slide ogni 10 secondi
  setInterval(showNextSlide, 5000); // 10000 millisecondi = 10 secondi
});

document.querySelectorAll(".buttonSlider").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const cardKey = event.target.dataset.key;
    const obSlider = objSlider[cardKey];
    const imgRight = document.querySelector("#imgRight");
    const bg = document.querySelector("#background");
    const container = document.querySelector("#containerinfo");
    const logoTitle = document.querySelector("#logoTitle");
    const secLogo = document.querySelector("#secLogo");
    const titleSlider = document.querySelector("#description");
    const btnSlider = document.querySelector("#mbb");
    const link = document.querySelector("#link");
    const floatingImg = document.querySelector("#floatingImg");
    const titleSliderSec = document.querySelector("#description2");
    const btn = document.querySelector("#buttonSlider");
    document.querySelectorAll(".logoTitle").forEach((el) => el.remove());

    if (!secLogo) {
      secLogo.style.display = "none";
    }

    bg.classList.remove(
      "bg-firstBanner",
      "bg-secondBanner",
      "bg-thirdBanner",
      "bg-fourthBanner",
      "bg-fifthBanner",
      "bg-sixthBanner"
    );

    titleSlider.style.webkitTextStrokeWidth = obSlider.borderTxt;
    titleSlider.style.webkitTextStrokeColor = obSlider.borderTxtClr;

    bg.classList.add(obSlider.bg);

    titleSlider.style.fontSize = obSlider.fontSize;

    titleSliderSec.style.fontSize = obSlider.fontTitle;

    titleSliderSec.innerText = obSlider.title2;

    titleSliderSec.style.color = obSlider.colorTitle2;

    floatingImg.style.width = obSlider.floatPngW;

    floatingImg.src = obSlider.floatPng;

    imgRight.style.left = obSlider.floatPos;

    imgRight.src = obSlider.float;

    btnSlider.style.background = obSlider.bgBtn;

    titleSlider.style.color = obSlider.colorTitle;

    btnSlider.style.color = obSlider.colorTextBtn;

    titleSlider.innerText = obSlider.title;
    logoTitle.style.color = obSlider.colorLogoName;
    btnSlider.innerText = obSlider.button;
    logoTitle.innerHTML = obSlider.logoName;
    secLogo.src = obSlider.secLogo;
    link.innerText = obSlider.link;
  });
});

const toggleMenu = (Id) => {
  const menu = document.querySelector(Id);
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
};

function toggleSetting(btnId) {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    if (button.id === btnId) {
      button.classList.add("text-black", "bg-colorsPrimary");
      button.classList.remove("text-colorsPrimary", "bg-navLinkHover");
    } else {
      button.classList.remove("text-black", "bg-colorsPrimary");
      button.classList.add("text-colorsPrimary", "bg-navLinkHover");
    }
  });
}

function toggleConnects(btnId) {
  const buttons = document.querySelectorAll(".connect");

  buttons.forEach((button) => {
    if (button.id === btnId) {
      button.classList.add("bg-[#372f47]", "text-[#b8add2]");
      button.classList.remove("bg-[#b8add2]", "text-[#372f47]");
    } else {
      button.classList.remove("bg-[#372f47]", "text-[#b8add2]");
      button.classList.add("bg-[#b8add2]", "text-[#372f47]");
    }
  });
}

function handleInnerClick(event) {
  event.stopPropagation();
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttonSlider");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Rimuovi la classe 'bg-white' da tutti i pulsanti
      buttons.forEach((btn) => {
        btn.classList.remove("opacity-100");
        btn.classList.add("opacity-35"); // Riporta l'opacità a 35% per tutti i pulsanti
      });

      // Aggiungi la classe 'bg-white' solo al pulsante cliccato
      button.classList.add("opacity-100");
      button.classList.remove("opacity-35"); // Rimuovi l'opacità per il pulsante cliccato
    });
  });
});

const toggleButtonsOne = () => {
  const menu = document.querySelector("#fbtn");
  const check = document.querySelector("#bgbtn");
  check.classList.toggle("bg-[#372f47]");
  check.classList.toggle("bg-[#31d0aa]");
  menu.classList.toggle("left-[27px]");
  menu.classList.toggle("left-[3px]");
};
const toggleButtonsTwo = () => {
  const menu = document.querySelector("#sbtn");
  const check = document.querySelector("#bgbtn2");
  check.classList.toggle("bg-[#372f47]");
  check.classList.toggle("bg-[#31d0aa]");
  menu.classList.toggle("left-[27px]");
  menu.classList.toggle("left-[3px]");
};
const toggleButtonsThree = () => {
  const menu = document.querySelector("#tbtn");
  const check = document.querySelector("#bgbtn3");
  check.classList.toggle("bg-[#372f47]");
  check.classList.toggle("bg-[#31d0aa]");
  menu.classList.toggle("left-[27px]");
  menu.classList.toggle("left-[3px]");
};
const toggleButtonsFour = () => {
  const menu = document.querySelector("#qbtn");
  const check = document.querySelector("#bgbtn4");
  check.classList.toggle("bg-[#372f47]");
  check.classList.toggle("bg-[#31d0aa]");
  menu.classList.toggle("left-[27px]");
  menu.classList.toggle("left-[3px]");
};
const toggleButtonsFive = () => {
  const menu = document.querySelector("#gbtn");
  const check = document.querySelector("#bgbtn5");
  check.classList.toggle("bg-[#372f47]");
  check.classList.toggle("bg-[#31d0aa]");
  menu.classList.toggle("left-[27px]");
  menu.classList.toggle("left-[3px]");
};
const toggleButtonsSix = () => {
  const menu = document.querySelector("#hbtn");
  const check = document.querySelector("#bgbtn6");
  check.classList.toggle("bg-[#372f47]");
  check.classList.toggle("bg-[#31d0aa]");
  menu.classList.toggle("left-[27px]");
  menu.classList.toggle("left-[3px]");
};

const fbtn = () => toggleButtons("#fbtn");
const showBell = () => toggleMenu("#bell");
const hiddenWarning = () => toggleMenu("#warning");
const toggleSettings = () => toggleMenu("#settings");
const toggleConnect = () => toggleMenu("#connect");
