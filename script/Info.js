
// const objContent = {
//     swap: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     liquidity: {
//         imageCard: "../assets/img/trade-liquidity.png",
//         imageCardOut: "../assets/img/trade-liquidity-purple.png"
//     },
//     bridge: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     perpetual: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     crypto: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     farm: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     pools: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     liquidStaking: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     simpleStaking: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     positionManager: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     gaming: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     prediction: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     },
//     nft: {
//         imageCard: "../assets/img/trade-swap.png",
//         imageCardOut: "../assets/img/trade-swap-purple.png"
//     }
// }


// document.querySelectorAll('.content').forEach(div => {
//     div.addEventListener('mouseover', (event) => {
//         const divKey = objContent[event.target.dataset.key]
//         const image = document.querySelector('.default')
//         image.src = divKey.imageCard
//     })
// })
// document.querySelectorAll('.content').forEach(div => {
//     div.addEventListener('mouseout', (event) => {
//         const divKey = event.target.dataset.key
//         const divInfo = objContent[divKey]
//         const image = document.querySelector('.default')
//         image.src = divInfo.imageCardOut
//     })
// })

const objLink = {
    link: {
        link: "https://google.com",
    },
    link2: {
        link: "https://google.com",
    },

}
document.querySelectorAll('.content').forEach(div => {
    div.addEventListener('click', (event) => {
        const divKey = objLink[event.target.dataset.key]
        location.assign(divKey.link)
    })
})
// 
const swap = document.querySelector('.swap')
const liquidity = document.querySelector('.liquidity')
const bridge = document.querySelector('.bridge')
const perpetual = document.querySelector('.perpetual')
const crypto = document.querySelector('.crypto')
const farm = document.querySelector('.farm')
const pools = document.querySelector('.pools')
const liquidStaking = document.querySelector('.liquidStaking')
const simpleStaking = document.querySelector('.simpleStaking')
const positionManager = document.querySelector('.positionManager')
const gaming = document.querySelector('.gaming')
const prediction = document.querySelector('.prediction')
const nft = document.querySelector('.nft')

const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

const liquidityOver = (liquidity) => liquidity.src = "../assets/img/trade-liquidity.png"
const liquidityOut = (liquidity) => liquidity.src = "../assets/img/trade-liquidity-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"

// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
// const swapOver = (swap) => swap.src = "../assets/img/trade-swap.png"
// const swapOut = (swap) => swap.src = "../assets/img/trade-swap-purple.png"
