class Player{
  constructor(name){
    this.name = name
    this.icon = name[0].toUpperCase()
    this.winString = ''.padEnd(3,this.icon)
  }
}

// export default class Player{
//   constructor(name){
//     this.name = name
//     this.icon = name[0].toUpperCase()
//     this.winString = ''.padEnd(3,this.icon)
//   }
// }