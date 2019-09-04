window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colours = [
        "#b892e4",
        "#e4e392",
        "#92a8e4",
        "#e492b8",
        "#b7e492",
        "#e49292"
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0
            sounds[index].play()
            createBubbles(index)
        })
    })

    const createBubbles = (index) => { 
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colours[index]
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener("animationend", function (){ 
            visual.removeChild(this)
        })
    }
})