// GENERAL VARIABLES
let  arrGameBoard = [['-','-','-'],['-','-','-'],['-','-','-']]
let ctr = 1
let gameOver = false
let p1N
let p1I
let p2N
let p2I
let p1W
let p2W

// EVENT HANDLERS
document.getElementById('setPlayers').addEventListener('click', playerSetup)

function playerSetup(){
  console.log('...playerSetup...')
  p1N = document.querySelector('#p1Name').value
  p1I = p1N[0].toUpperCase()
  p2N = document.getElementById('p2Name').value
  p2I = p2N[0].toUpperCase()
  // console.log(p1N + '   /   ' + p1I)
  // console.log(p2N + '   /   ' + p2I)


  document.getElementById('p1Icon').value = p1I
  p1W = ''.padEnd(3,p1I)

  if (p1I === p2I){
    // console.log('x1')
    if (p1I === 'X'){
      // console.log('x2')
      p2I = 'O'
      document.getElementById('p2Icon').value = p2I
    } else {
      // console.log('x3')
      p2I = 'X'
      document.getElementById('p2Icon').value = p2I
    }
  } else {
    // console.log('x4')
    document.getElementById('p2Icon').value = p2I
  }
  p1W = ''.padEnd(3,p1I)
  p2W = ''.padEnd(3,p2I)
}


document.getElementById('gameBoard').addEventListener('click', function(e) {
  console.log('...GAME ENGINE...')
  if (p1I === undefined || p2I === undefined) { playerSetup()}
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
      curSquare.innerText = p2I
      arrGameBoard[rowNum][colNum] = p2I
    } else {
      curSquare.innerText = p1I
      arrGameBoard[rowNum][colNum] = p1I
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

    if (row0 === p1W || row1 === p1W || row2 === p1W){
        document.querySelector("h2").innerText = `${p1I}'s win the game1`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (row0 === p2W || row1 === p2W || row2 === p2W){
        document.querySelector("h2").innerText = `${p2I}'s win the game2`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (col0 === p1W || col1 === p1W || col2 === p1W){
        document.querySelector("h2").innerText = `${p1I}'s win the game3`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
    } else if (col0 === p2W || col1 === p2W || col2 === p2W){
        document.querySelector("h2").innerText = `${p2I}'s win the game4`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
      } else if (dia1 === p1W || dia2 === p1W){
        document.querySelector("h2").innerText = `${p1I}'s win the game5`
        gameOver = true
        highlightWinner('d', dia1, dia2)
      } else if (dia1 === p2W || dia2 === p2W){
        document.querySelector("h2").innerText = `${p2I}'s win the game6`
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
    if (a === p1W || a === p2W){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square01").classList.add('winner')
      document.getElementById("square02").classList.add('winner')
    } else if (b === p1W || b === p2W){
      document.getElementById("square10").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square12").classList.add('winner')
    } else if (c === p1W || c === p2W){
      document.getElementById("square20").classList.add('winner')
      document.getElementById("square21").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    }
  } else if (winType === 'c'){
    if (a === p1W || a === p2W){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square10").classList.add('winner')
      document.getElementById("square20").classList.add('winner')
    } else if (b === p1W || b === p2W){
      document.getElementById("square01").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square21").classList.add('winner')
    } else if (c === p1W || c === p2W){
      document.getElementById("square02").classList.add('winner')
      document.getElementById("square12").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    }
  } else {
    if (a === p1W || a === p2W){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    } else if (b === p1W || b === p2W){
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
