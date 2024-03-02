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