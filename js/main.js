import Player from './player.js'

// GENERAL VARIABLES
let  arrGameBoard = [['-','-','-'],['-','-','-'],['-','-','-']]
let ctr = 1
let gameOver = false
// let p1N
// let p1I
// let p2N
// let p2I
// let p1W
// let p2W

// EVENT HANDLERS
document.getElementById('setPlayers').addEventListener('click', playerSetup)

function playerSetup(){
  console.log('...playerSetup...')
  let p1 = new Player(document.querySelector('#p1Name').value) 
  let p2 = new Player(document.querySelector('#p2Name').value) 
  
  // p1N = document.querySelector('#p1Name').value
  // p1I = p1N[0].toUpperCase()
  // p2N = document.getElementById('p2Name').value
  // p2I = p2N[0].toUpperCase()
  // console.log(p1N + '   /   ' + p1I)
  // console.log(p2N + '   /   ' + p2I)


  document.getElementById('p1Icon').value = p1.icon
  // p1W = ''.padEnd(3,p1I)

  if (p1.icon === p2.icon){
    // console.log('x1')
    if (p1.icon === 'X'){
      // console.log('x2')
      p2.icon = 'O'
      document.getElementById('p2Icon').value = p2.icon
    } else {
      // console.log('x3')
      p2.icon = 'X'
      document.getElementById('p2Icon').value = p2.icon
    }
  } else {
    // console.log('x4')
    document.getElementById('p2Icon').value = p2.icon
  }
  // p1W = ''.padEnd(3,p1I)
  // p2W = ''.padEnd(3,p2I)
}


document.getElementById('gameBoard').addEventListener('click', function(e) {
  console.log('...GAME ENGINE...')
  if (p1.name === undefined || p2.name === undefined) { playerSetup()}
  // console.log(p1N + '   /   ' + p1I + '   /   ' + p1W)
  // console.log(p2N + '   /   ' + p2I + '   /   ' + p2W)


  let curSelection = e.target
  let curID = e.target.id
  let rowNum = curID.substring(6,7)
  let colNum = curID.substring(7,8)
  let curSquare = document.getElementById(curID)

  if (curID === '' || gameOver === true){
    return ''
  } else if (curSquare.innerText === '') {
    if (ctr % 2 === 0){
      curSquare.innerText = p2.icon
      arrGameBoard[rowNum][colNum] = p2.icon
    } else {
      curSquare.innerText = p1.icon
      arrGameBoard[rowNum][colNum] = p1.icon
    }
    ctr ++
  }

  if (ctr >= 6){
    let row0 = (arrGameBoard[0].join(''))
    let row1 = (arrGameBoard[1].join(''))
    let row2 = (arrGameBoard[2].join(''))

    let col0 = (arrGameBoard[0][0] + arrGameBoard[1][0] + arrGameBoard[2][0])
    let col1 = (arrGameBoard[0][1] + arrGameBoard[1][1] + arrGameBoard[2][1])
    let col2 = (arrGameBoard[0][2] + arrGameBoard[1][2] + arrGameBoard[2][2])

    let dia1 = (arrGameBoard[0][0] + arrGameBoard[1][1] + arrGameBoard[2][2])
    let dia2 = (arrGameBoard[0][2] + arrGameBoard[1][1] + arrGameBoard[2][0])

    if (row0 === p1.winString || row1 === p1.winString || row2 === p1.winString){
        document.querySelector("h2").innerText = `${p1.icon}'s win the game`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (row0 === p.winString || row1 === p.winString || row2 === p.winString){
        document.querySelector("h2").innerText = `${p2.icon}'s win the game`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (col0 === p1.winString || col1 === p1.winString || col2 === p1.winString){
        document.querySelector("h2").innerText = `${p1.icon}'s win the game`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
    } else if (col0 === p.winString || col1 === p.winString || col2 === p.winString){
        document.querySelector("h2").innerText = `${p2.icon}'s win the game`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
      } else if (dia1 === p1.winString || dia2 === p1.winString){
        document.querySelector("h2").innerText = `${p1.icon}'s win the game`
        gameOver = true
        highlightWinner('d', dia1, dia2)
      } else if (dia1 === p2.winString || dia2 === p2.winString){
        document.querySelector("h2").innerText = `${p2.icon}'s win the game`
        gameOver = true
        highlightWinner('d', dia1, dia2)
      } else if (ctr === 10) {
          document.querySelector("h2").innerText = `No-one wins ... try again`
          gameOver = true
      }
  }
})

function highlightWinner(winType,a,b,c = 0){
  if (winType === 'r'){
    if (a === p1.winString || a === p2.winString){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square01").classList.add('winner')
      document.getElementById("square02").classList.add('winner')
    } else if (b === p1.winString || b === p2.winString){
      document.getElementById("square10").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square12").classList.add('winner')
    } else if (c === p.winStringW || c === p2.winString){
      document.getElementById("square20").classList.add('winner')
      document.getElementById("square21").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    }
  } else if (winType === 'c'){
    if (a === p1.winString || a === p2.winString){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square10").classList.add('winner')
      document.getElementById("square20").classList.add('winner')
    } else if (b === p1.winString || b === p2.winString){
      document.getElementById("square01").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square21").classList.add('winner')
    } else if (c === p1.winString || c === p2.winString){
      document.getElementById("square02").classList.add('winner')
      document.getElementById("square12").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    }
  } else {
    if (a === p1.winString || a === p2.winString){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    } else if (b === p1.winString || b === p2.winString){
      document.getElementById("square02").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square20").classList.add('winner')
    }
  }
}

//Adding JS for reset
document.querySelector('#reset').addEventListener('click' , function (r) {
  document.location.reload(true)
})
