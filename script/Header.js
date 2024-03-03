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