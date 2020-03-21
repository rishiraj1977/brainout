class Player {
  constructor(){
   // this.index = null;
   // this.distance = 0;
    this.name = null;
    this.score=0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var player = "player" ;
    database.ref(player).set({
      name:this.name,
      score:this.score
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('player');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

     getCarsAtEnd(){
     database.ref('CarsAtEnd').on("value",(data)=>{
       this.rank =data.val();
     })

  }

    getScore(){
  
    database.ref('player/score').on("value",(data)=>{
      levelScore =data.val();
    })

 }

  static updateCarsAtEnd(rank){
     database.ref('/').update({
       CarsAtEnd:rank
     });
  }
}
