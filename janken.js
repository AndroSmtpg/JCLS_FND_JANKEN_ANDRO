const gunting = () => {
    let player = `<img src="gunting.png">`
    document.getElementById('player').innerHTML = `<img src="gunting.png">`
    compResult(player)
}
const batu = () => {
    let player = `<img src="batu.png">`
    document.getElementById('player').innerHTML = `<img src="batu.png">`
    compResult(player)
}
const kertas = () => {
    let player = `<img src="kertas.png">`
    document.getElementById('player').innerHTML = `<img src="kertas.png">`
    compResult(player)
}

const compResult = () => {
    compImg = [
        `<img src="gunting.png">`,
        `<img src="batu.png">`,
        `<img src="kertas.png">`
    ]
    compImg.array.forEach((val,idx) => {
        
    });


}