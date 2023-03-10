document.body.addEventListener('keydown', playSound)
document.body.addEventListener('keydown', press)

document.querySelector('.help').addEventListener('click', sumir)


let trocar = document.querySelector('.types')

// tocar o som de acordo com a tecla tocada
function playSound(e) {
    tecla = `#key${e.key.toUpperCase()}`
    console.log(tecla)
    let audio = document.querySelector(`audio${tecla}`)

    audio.currentTime=0
    audio.volume = 0.8
    audio.play()
}

// adiciona a classe press a tecla apertada
function press(e) {
    teclaPress = `.${e.key.toUpperCase()}`
    document.querySelector(`div${teclaPress}`).classList.add('press')
    
    setTimeout(() => {
        document.querySelector(`div${teclaPress}`).classList.remove('press')}, 100)
}

function tema() {

    const verificar = document.querySelector('.fa-solid')

    // light theme
    document.querySelector('body').classList.toggle('light-body')

    document.querySelector('.theme').classList.toggle('light-icon')

    document.querySelector('.help').classList.toggle('light-icon')

    document.querySelector('.launchpad').classList.toggle('light-launchpad')

    document.querySelector('.title').classList.toggle('light-title')

    document.querySelector('.types').classList.toggle('light-types')

    document.querySelector('.ajuda-trap').classList.toggle('light-pop-up')

    document.querySelector('.ajuda-soulja').classList.toggle('light-pop-up')
    

    // verifica se contem a classe sun, se tiver, coloca a lua e tira o sol
    if (verificar.classList.contains('fa-sun')) {
        document.querySelector('.fa-solid').classList.add('fa-moon')
        document.querySelector('.fa-solid').classList.remove('fa-sun')


    // verifica se contem a classe lua, se tiver, coloca o sol e tira a lua    
    } else if (verificar.classList.contains('fa-moon')) {
        document.querySelector('.fa-solid').classList.add('fa-sun')
        document.querySelector('.fa-solid').classList.remove('fa-moon')


    }
}

    // verifica qual foi a opção selecionada
function sumir() {
    if (trocar.value == 0) {
        document.querySelector('.ajuda-trap').classList.toggle('aparecer')
        document.querySelector('.ajuda-soulja').classList.remove('aparecer') }
    else {
        document.querySelector('.ajuda-soulja').classList.toggle('aparecer')
        document.querySelector('.ajuda-trap').classList.remove('aparecer')
    }
}

    // troca a source do audio de acordo com a opção escolhida
function trocarAudio() {
    if (trocar.value == 1) {
        
        let keyQ = document.getElementById('keyQ')
        keyQ.src = 'assets/sounds-soulja/1-c-melody.ogg'

        let keyW = document.getElementById('keyW')
        keyW.src = 'assets/sounds-soulja/2-g-melody.ogg'

        let keyE = document.getElementById('keyE')
        keyE.src = 'assets/sounds-soulja/3-gsharp-melody.ogg'

        let keyA = document.getElementById('keyA')
        keyA.src = 'assets/sounds-soulja/4-fxs.ogg'

        let keyS = document.getElementById('keyS')
        keyS.src = 'assets/sounds-soulja/5-perc.ogg'

        let keyD = document.getElementById('keyD')
        keyD.src = 'assets/sounds-soulja/6-you.ogg'

        let keyZ = document.getElementById('keyZ')
        keyZ.src = 'assets/sounds-soulja/7-hihat.ogg'

        let keyX = document.getElementById('keyX')
        keyX.src = 'assets/sounds-soulja/8-clap.ogg'

        let keyC = document.getElementById('keyC')
        keyC.src = 'assets/sounds-soulja/9-808.ogg'

        document.querySelector('.ajuda-trap').classList.remove('aparecer')

    } else if (trocar.value == 0) {

        let keyQ = document.getElementById('keyQ')
        keyQ.src = 'assets/sounds-trap/1guitar.ogg'

        let keyW = document.getElementById('keyW')
        keyW.src = 'assets/sounds-trap/2rhodes.ogg'

        let keyE = document.getElementById('keyE')
        keyE.src = 'assets/sounds-trap/3kick.ogg'

        let keyA = document.getElementById('keyA')
        keyA.src = 'assets/sounds-trap/4oh.ogg'

        let keyS = document.getElementById('keyS')
        keyS.src = 'assets/sounds-trap/5snare.ogg'

        let keyD = document.getElementById('keyD')
        keyD.src = 'assets/sounds-trap/6zay.ogg'

        let keyZ = document.getElementById('keyZ')
        keyZ.src = 'assets/sounds-trap/8clap.ogg'

        let keyX = document.getElementById('keyX')
        keyX.src = 'assets/sounds-trap/7hihat.ogg'

        let keyC = document.getElementById('keyC')
        keyC.src = 'assets/sounds-trap/6zay2.ogg'

        document.querySelector('.ajuda-soulja').classList.remove('aparecer')
    }
}