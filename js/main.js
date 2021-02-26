// document.querySelector("#g1").addEventListener('click', clickSquare(e))
// //document.querySelector("#g2").addEventListener('click', clickSquare)
let ctr = 1
let  arrGameBoard = [['-','-','-'],['-','-','-'],['-','-','-']]
let Winner = ''
let gameOver = false

document.addEventListener('click', function(e) {
//   console.log('hi ')
//   console.log(e)
//   console.log(e.target)
//   console.log(`id = ${e.target.id}`)
//   console.log (arrGameBoard)
  let curSelection = e.target
  let curID = e.target.id
  let rowNum = curID.substring(6,7)
  let colNum = curID.substring(7,8)
    // console.log(curID)
    // console.log(`rN: ${rowNum}   /   cN: ${colNum}`)

//  console.log(`curID = "${curID}"`)
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
//     console.log(arrGameBoard)
    ctr ++
  }
//  console.log(ctr)
  if (ctr >= 6){
    // console.log('Test Win?')
    // console.log(arrGameBoard)
    let row0 = (arrGameBoard[0].join(''))
    let row1 = (arrGameBoard[1].join(''))
    let row2 = (arrGameBoard[2].join(''))
    
    let col0 = (arrGameBoard[0][0] + arrGameBoard[1][0] + arrGameBoard[2][0])
    let col1 = (arrGameBoard[0][1] + arrGameBoard[1][1] + arrGameBoard[2][1])
    let col2 = (arrGameBoard[0][2] + arrGameBoard[1][2] + arrGameBoard[2][2])

    let dia1 = (arrGameBoard[0][0] + arrGameBoard[1][1] + arrGameBoard[2][2])
    let dia2 = (arrGameBoard[0][2] + arrGameBoard[1][1] + arrGameBoard[2][0])

    if (row0 === 'XXX' || row1 === 'XXX' || row2 === 'XXX'){
        //check rows
        document.querySelector("h2").innerText = `X's win the game1`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (row0 === 'OOO' || row1 === 'OOO' || row2 === 'OOO'){
        //check rows
        document.querySelector("h2").innerText = `O's win the game2`
        gameOver = true
        highlightWinner('r',row0,row1,row2)
    } else if (col0 === 'XXX' || col1 === 'XXX' || col2 === 'XXX'){
        //check cols
        document.querySelector("h2").innerText = `X's win the game3`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
    } else if (col0 === 'OOO' || col1 === 'OOO' || col2 === 'OOO'){
        //check cols
        document.querySelector("h2").innerText = `O's win the game4`
        gameOver = true
        highlightWinner('c',col0,col1,col2)
      } else if (dia1 === 'XXX' || dia2 === 'XXX'){
        //check dias
        document.querySelector("h2").innerText = `X's win the game5`
        gameOver = true
        highlightWinner('d', dia1, dia2)
      } else if (dia1 === 'OOO' || dia2 === 'OOO'){
        //check dias
        document.querySelector("h2").innerText = `O's win the game6`
        gameOver = true
        highlightWinner('d', dia1, dia2)
      } else if (ctr === 10) {
          //check draw
          document.querySelector("h2").innerText = `No-one wins ... try again`
          gameOver = true
        }
  }

})

function highlightWinner(winType,a,b,c = 0){
// console.log(winType)
// console.log(a)
// console.log(b)
// console.log(c)
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

// if (arrGameBoard[0][0] != '-' && (arrGameBoard[0][0] === arrGameBoard[0][1] && arrGameBoard[0][1] === arrGameBoard[0][2])){
//   //check row 0 - top row
//     document.querySelector("h2").innerText = `${arrGameBoard[0][0]}'s win the game1`
//     gameOver = true
//   } else if (arrGameBoard[1][0] != '-' && (arrGameBoard[1][0] === arrGameBoard[1][1] && arrGameBoard[1][1] === arrGameBoard[1][2])){
//   //check row 1 - middle row
//     document.querySelector("h2").innerText = `${arrGameBoard[1][0]}'s win the game2`
//     gameOver = true
//   }else if (arrGameBoard[2][0] && (arrGameBoard[2][0] === arrGameBoard[2][1] && arrGameBoard[2][1] === arrGameBoard[2][2])){
//   //check row 2 - bottom row
//     document.querySelector("h2").innerText = `${arrGameBoard[2][0]}'s win the game3`
//     gameOver = true
//   } else if (arrGameBoard[0][0] && (arrGameBoard[0][0] === arrGameBoard[1][0] && arrGameBoard[1][0] === arrGameBoard[2][2])){
//   //check col 0 - left col
//     document.querySelector("h2").innerText = `${arrGameBoard[0][0]}'s win the game4`
//     gameOver = true
//   } else if (arrGameBoard[0][1] === arrGameBoard[1][1] && arrGameBoard[1][1] === arrGameBoard[2][1]){
//   //check col 1 - centre col
//     document.querySelector("h2").innerText = `${arrGameBoard[0][1]}'s win the game5`
//     gameOver = true
//   } else if (arrGameBoard[0][2] === arrGameBoard[1][2] && arrGameBoard[1][2] === arrGameBoard[2][2]){
//   //check col 2 - right col
//     document.querySelector("h2").innerText = `${arrGameBoard[2][0]}'s win the game6`
//     gameOver = true
//   }
// }