let player1 = {
    name: 'subzero',
    hp: 5,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Gun','Knife'],
    attack: function(){
        console.log(player1.name + ' Fight...')
    }
}
let player2 = {
    name: 'sonya',
    hp: 53,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Gun','Knife'],
    attack: function(){
        console.log(player2.name + ' Fight...')
    }
}
function createPlayer(player,obj){
    const $arenas = document.querySelector('.arenas')
    const $player = document.createElement('div')
    $player.classList.add(player)

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = obj.hp + '%';

    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerHTML = obj.name

    const $character = document.createElement('div')
    $character.classList.add('character')

    const $img = document.createElement('img')
    $img.src = obj.img

    $player.appendChild($progressbar)
    $progressbar.appendChild($life) 
    $progressbar.appendChild($name)
    $player.appendChild($character)
    $character.appendChild($img)

    const $root = document.querySelector('.root')

    $arenas.appendChild($player)
}
createPlayer('player1',player1)
createPlayer('player2',player2)