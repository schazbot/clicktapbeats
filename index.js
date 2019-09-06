window.addEventListener('keydown', function (e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.pad[data-key="${e.keyCode}"]`)

    if (!sound) return
    sound.currentTime = 0
    sound.play()
    key.classList.add('playing')

    function removeTransition(e) { 
        if (e.propertyName !== 'transform') return
        console.log(e.propertyName)
        this.classList.remove('playing')
    }

    const pads = document.querySelectorAll('.pad')
    pads.forEach(pad => pad.addEventListener('transitionend', removeTransition))
})

