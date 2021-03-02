let  arrGameBoard = [['-','-','-'],['-','-','-'],['-','-','-']]
let ctr = 1
let gameOver = false




document.getElementById('gameBoard').addEventListener('click', function(e) {
  console.log('In game engine')
  let curSelection = e.target
  let curID = e.target.id
  let rowNum = curID.substring(6,7)
  let colNum = curID.substring(7,8)
  let curSquare = document.getElementById(curID)

  if (curID === '' || gameOver === true){
    return ''
  } else if (curSquare.innerText === '') {
    if (ctr % 2 === 0){
      curSquare.innerText = 'O'
      arrGameBoard[rowNum][colNum] = 'O'
    } else {
      curSquare.innerText = 'X'
      arrGameBoard[rowNum][colNum] = 'X'
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

    if (row0 === 'XXX' || row1 === 'XXX' || row2 === 'XXX'){
        document.querySelector("h2").innerText = `X's win the game`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (row0 === 'OOO' || row1 === 'OOO' || row2 === 'OOO'){
        document.querySelector("h2").innerText = `O's win the game`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (col0 === 'XXX' || col1 === 'XXX' || col2 === 'XXX'){
        document.querySelector("h2").innerText = `X's win the game`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
    } else if (col0 === 'OOO' || col1 === 'OOO' || col2 === 'OOO'){
        document.querySelector("h2").innerText = `O's win the game`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
      } else if (dia1 === 'XXX' || dia2 === 'XXX'){
        document.querySelector("h2").innerText = `X's win the game`
        gameOver = true
        highlightWinner('d', dia1, dia2)
      } else if (dia1 === 'OOO' || dia2 === 'OOO'){
        document.querySelector("h2").innerText = `O's win the game`
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
    if (a === "XXX" || a === "OOO"){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square01").classList.add('winner')
      document.getElementById("square02").classList.add('winner')
    } else if (b === "XXX" || b === "OOO"){
      document.getElementById("square10").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square12").classList.add('winner')
    } else if (c === "XXX" || c === "OOO"){
      document.getElementById("square20").classList.add('winner')
      document.getElementById("square21").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    }
  } else if (winType === 'c'){
    if (a === "XXX" || a === "OOO"){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square10").classList.add('winner')
      document.getElementById("square20").classList.add('winner')
    } else if (b === "XXX" || b === "OOO"){
      document.getElementById("square01").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square21").classList.add('winner')
    } else if (c === "XXX" || c === "OOO"){
      document.getElementById("square02").classList.add('winner')
      document.getElementById("square12").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    }
  } else {
    if (a === "XXX" || a === "OOO"){
      document.getElementById("square00").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square22").classList.add('winner')
    } else if (b === "XXX" || b === "OOO"){
      document.getElementById("square02").classList.add('winner')
      document.getElementById("square11").classList.add('winner')
      document.getElementById("square20").classList.add('winner')
    }
  }
}