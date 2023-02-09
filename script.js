document.body.addEventListener('keyup', playSound)
document.body.addEventListener('touchstart', playSound)
document.body.addEventListener('keyup', press)
document.body.addEventListener('touchstart', press)

document.querySelector('#question-mark').addEventListener('click', sumir)
document.querySelector('#question-mark').addEventListener('touchend', sumir)


function playSound(e) {
    // verifica a tecla apertada
    tecla = `#key${e.key.toUpperCase()}`
    console.log(tecla)
    let audio = document.querySelector(`audio${tecla}`)
    
    

    audio.currentTime=0
    audio.volume = 1
    audio.play()
}

function press(e) {
    teclaPress = `.${e.key.toUpperCase()}`
    document.querySelector(`div${teclaPress}`).classList.add('press')
    
    setTimeout(() => {
        document.querySelector(`div${teclaPress}`).classList.remove('press')}, 100)
}

function sumir() {
    document.querySelector('.ajuda-padrao').classList.toggle('aparecer')
}
