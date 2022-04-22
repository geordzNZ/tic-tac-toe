//import Player from './player.js'

//Set up player class
class Player{
    constructor(name){
      this.name = name
      this.icon = name== '' ? '': name[0].toUpperCase()
      this.winString = ''.padEnd(3,this.icon)
    }
  }
  
  
  // EVENT HANDLERS
  document.getElementById('setPlayers').addEventListener('click', playerSetup)
  
  
  // GENERAL VARIABLES
  let  arrGameBoard = [['-','-','-'],['-','-','-'],['-','-','-']]
  let ctr = 1
  let gameOver = false
  let p1 = new Player(document.querySelector('#p1Name').value)
  let p2 = new Player(document.querySelector('#p2Name').value)
  const squares = [ "square00","square01","square02",
                             "square10", "square11", "square12",
                             "square20","square21","square22"]
  localStorage.setItem('p1score', 0)
  localStorage.setItem('p2score', 0)
  
  
  function playerSetup(){
    console.log('...playerSetup...')
  
      
      p1 = new Player(document.querySelector('#p1Name').value)
      p2 = new Player(document.querySelector('#p2Name').value)
      
      console.log('b', p1)
      console.log('b', p2)
  
      if (p1.name == '') {
          alert('Please enter Player 1 name')
          return
      } else if (p2.name == '') {
          alert('Please enter Player 2 name')
          return
      }
  
    document.getElementById('p1Icon').value = p1.icon
  
    if (p1.icon === p2.icon){
      // console.log('x1')
      if (p1.icon === 'X'){
        // console.log('x2')
        p2.icon = 'O'
        console.log('-2- ' + p2.icon + '   /   ' + p2.winString)
        document.getElementById('p2Icon').value = p2.icon
      } else {
        // console.log('x3')
        p2.icon = 'X'
        console.log('-3- ' + p2.icon + '   /   ' + p2.winString)
        document.getElementById('p2Icon').value = p2.icon
      }
    } else {
      // console.log('x4')
      // console.log('-4- ' + p2.icon + '   /   ' + p2.winString)
      document.getElementById('p2Icon').value = p2.icon
      }        
  }
  
  
  document.getElementById('gameBoard').addEventListener('click', function(e) {
      console.log('...GAME ENGINE...')
    if (p1.name === undefined || p2.name === undefined) { playerSetup()}
      
      const winMsgName = document.getElementById("winMsgName")
      const winMsgSubText = document.getElementById("winMsgSubText")
      const winSection = document.getElementById("winSection")
  
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
          winMsgName.innerText = `${p1.name}`
          winMsgName.classList.remove('hidden')
          winMsgSubText.classList.remove('hidden')
          gameOver = true
          highlightWinner('r',row0,row1,row2)
          updateScores('p1')
      } else if (row0 === p2.winString || row1 === p2.winString || row2 === p2.winString){
          winMsgName.innerText = `${p2.name}`
          winMsgName.classList.remove('hidden')
          winMsgSubText.classList.remove('hidden')
          gameOver = true
          highlightWinner('r', row0, row1, row2)
          updateScores('p2')
      } else if (col0 === p1.winString || col1 === p1.winString || col2 === p1.winString){
          winMsgName.innerText = `${p1.name}`
          winMsgName.classList.remove('hidden')
          winMsgSubText.classList.remove('hidden')
          gameOver = true
          highlightWinner('c', col0, col1, col2)
          updateScores('p1')
      } else if (col0 === p2.winString || col1 === p2.winString || col2 === p2.winString){
          winMsgName.innerText = `${p2.name}`
          winMsgName.classList.remove('hidden')
          winMsgSubText.classList.remove('hidden')
          gameOver = true
          highlightWinner('c', col0, col1, col2)
          updateScores('p2')
        } else if (dia1 === p1.winString || dia2 === p1.winString){
          winMsgName.innerText = `${p1.name}`
          winMsgName.classList.remove('hidden')
          winMsgSubText.classList.remove('hidden')
          gameOver = true
          highlightWinner('d', dia1, dia2)
          updateScores('p1')
        } else if (dia1 === p2.winString || dia2 === p2.winString){
          winMsgName.innerText = `${p2.name}`
          winMsgName.classList.remove('hidden')
          winMsgSubText.classList.remove('hidden')
          gameOver = true
          highlightWinner('d', dia1, dia2)
          updateScores('p2')
        } else if (ctr === 10) {
            winMsgName.innerText = `No-one wins ... try again`
            winMsgName.classList.remove('hidden')
            //winMsgSubText.classList.remove('hidden')
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
      } else if (c === p1.winString || c === p2.winString){
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
  
  function updateScores(player) {
      let curScore = localStorage.getItem(player+'score')
      console.log(player+'score', curScore)
      localStorage.setItem(player+'score',parseInt(curScore)+1)
      //localStorage.setItem('p1score',11)
  }
  
  //Adding JS for reset
  document.querySelector('#resetGame').addEventListener('click' , function (r) {
      document.location.reload(true)
  })
  
  //Adding reset game board for new game
  document.querySelector('#resetBoard').addEventListener('click', function (r) {
      console.log('...Reset Board...')
  
      squares.forEach(sq => {
          document.getElementById(sq).innerText = ''
          document.getElementById(sq).classList.remove('winner')
      })
    
      winMsgName.classList.add('hidden')
      winMsgSubText.classList.add('hidden')
      winSection.classList.add('hidden')
  
      ctr = 1
      gameOver = false
      arrGameBoard = [['-','-','-'],['-','-','-'],['-','-','-']]
  })