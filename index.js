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

var context = new AudioContext();

function sequencer() {
    const kick = new Tone.Player("./808/BD7550.WAV").toDestination()
    const snare = new Tone.Player("./808/SD7510.WAV").toDestination()
    const hiHat = new Tone.Player("./808/HH00.WAV").toDestination()
    let index = 0

    Tone.Transport.scheduleRepeat(repeat, "16n")
    Tone.Transport.start()

    const startStopButton = document.querySelector('#startStop').addEventListener('click', function() {
        Tone.Transport.stop(() => {
          console.log('Playback resumed successfully');
        });
      });




    function repeat() {
        let step = index % 16

        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`)
        if (kickInputs.checked) {
            kick.start()
        }

        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`)
        if (snareInputs.checked) {
            snare.start()
        }

        let hiHatInputs = document.querySelector(`.hi-hat input:nth-child(${step + 1})`)
        if (hiHatInputs.checked) {
            hiHat.start()
        }

        index++
    }
}

// function startStop() {
//     const startStopButton = document.querySelector("#startStop")
//     startStopButton.addEventListener('click', () => {
//         Tone.Transport.start()

//         var context = new AudioContext();
//         context.resume().then(() => console.log("startStopButton clicked"))
//     }

//     )

// }

function init() {
    sequencer()
    // startStop()
}

init()



