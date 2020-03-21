class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
    this.text=createElement('h3');
    this.levelText=createElement('h1');
    this.level1=createButton('h2');
    this.level2=createButton('h2');
    this.level3=createButton('h2');
    this.firstlevel=createElement('h1');
    this.information=createElement('h2');
    this.ans=createInput("name");
    this.impot=createButton("ENTER");
    this.line=createElement("h1");
    this.next2=createButton("h1");
    this.secondlevel=createElement("h1");
    this.information2=createElement("h2");
    this.ans2=createInput("name");
    this.impot2=createButton("ENTER");
    this.line2=createElement("h1");
    this.next3=createButton("h1");
    this.secondlevel2=createElement('h1');
    this.ans3=createInput("name");
    this.impot3=createButton("ENTER");
    this.next4=createButton("h1");
    this.line3=createElement("h1");
    this.ques1=createElement('h1');
    this.thirdlevel=createElement('h1');
    this.ans4=createInput('name');
    this.impot4=createButton('ENTER');
    this.information3=createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.text.hide();
    this.levelText.hide();
    this.level1.hide();
    this.level2.hide();
    this.level3.hide();
    this.information.hide();
    this.impot.hide();
    this.ans.hide();
    this.firstlevel.hide();
    //this.secondlevel.hide();
  }

    display(){
      background("lightblue");
      image(background_image, 0,0,displayWidth, displayHeight);

      this.title.html("Brain Out Game");
      this.text.html("Give your name and press PLAY button to start");
      
      this.title.position(displayWidth/2 - 90, 0);
      this.text.position(displayWidth/2-130,displayHeight/2-200);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 20, displayHeight/2.2);
      this.reset.position(displayWidth-100,20);
    
      //going to level screen on pressing PLAY button 
      this.button.mousePressed(()=>{
      
        //hidding the input,button and text 
        this.input.hide();
        this.button.hide();
        this.text.hide();

        //getting the name of the player from the inupt value which was entered in text box
        player.name = this.input.value();

      // playerCount+=1;
      // player.index = playerCount;

      //updating the player with its name in the database
        player.update();

      // player.updateCount(playerCount);

      //displaying the text with the player name 
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 50, displayHeight/8);

        //displaying the level text 
        this.levelText.html("Choose your levels");
        this.levelText.position(displayWidth/2-100, displayHeight/5);

        //level 1 button
        this.level1.html("Level 1");
        this.level1.position(displayWidth/2-400,displayHeight/3);
        //this.level1.size(50);
        //image( level1_image,displayWidth/2-450,displayHeight/2,100,100)

        //level2 button 
        this.level2.html("Level 2");
        this.level2.position(displayWidth/2-50,displayHeight/3);

        //level3 button 
        this.level3.html("Level 3");
        this.level3.position(displayWidth-450,290,displayHeight/3);

        //giving the brain out image on the level screen 
        //image(brainout_image,displayWidth/2-500,displayHeight/2.7,1000,400);

        player.getScore();
         console.log((levelScore));
        if (levelScore<50){
          this.level2.hide();
          this.level3.hide();
        }

        if(levelScore>=100 && levelScore<200){
          this.level3.hide();
        }
        
      });

    //going to first level screen on pressing LEVEL1 button 
    this.level1.mousePressed(()=>{
     
      //hidding the input,button,text,levels,leveltext and greeting
      this.input.hide();
      this.button.hide();
      this.text.hide();
      this.level2.hide();
      this.level3.hide();
      this.levelText.hide();
      this.greeting.hide();
      this.title.hide();
      this.level1.hide();
      //this.brainout_image.hide();
      //first level screen 
      this.firstlevel.html("first level");
      this.firstlevel.position(displayWidth/2 -60, displayHeight/25);

      this.information.html("if you pass this level you will get 50 points ");
      this.information.position(displayWidth/2-200,displayHeight/10);

      image(rain_image,displayWidth/2-700,displayHeight/6,250,250);

      image(plus_image,displayWidth/2-400,displayHeight/4,150,150);

      image(bow_image,displayWidth/2-200,displayHeight/6,250,250);

      image(equal_image,displayWidth-600,250,displayHeight/3,100,100);

      this.ans.position(displayWidth/2 - 100 , displayHeight/1 - 350);

      this.impot.position(displayWidth/2-45,displayHeight/1-300);

    })
   /*  var score=0; */
    //for RESET button
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
    //greetings and next level
    this.impot.mousePressed(()=>{

   gameState=1;


   score = score + 50;

   this.firstlevel.hide();
   
   this.line.html("wow you have WON!");
   this.line.position(displayWidth/2 -150, displayHeight/25);

   this.next2.html("next level");
   this.next2.position(displayWidth/2-50,displayHeight/4);
    
   image(congrats_image,displayWidth/2-700,displayHeight/6,250,250);

    })

    this.next2.mousePressed(()=>{

   gameState=2;
   
   this.line.hide();
   this.next2.hide();
  
   background("white");
   image(background2_image,0,0,displayWidth, displayHeight);

   this.secondlevel.html("second level-1 part");
   this.secondlevel.position(displayWidth/2 -130, displayHeight/25);

   this.information2.html("if you pass this level you will get 100 points");
   this.information2.position(displayWidth/2-200,displayHeight/10);

  image(tooth_image,displayWidth/2-700,displayHeight/6,250,250);

  image(plus_image,displayWidth/2-400,displayHeight/4,150,150);

  image(brush_image,displayWidth/2-200,displayHeight/6,250,250);

  image(equal_image,displayWidth-600,250,displayHeight/3,100,100);

  this.ans2.position(displayWidth/2 - 100 , displayHeight/1 - 350);

  this.impot2.position(displayWidth/2-45,displayHeight/1-300);

    })

    this.impot2.mousePressed(()=>{

      gameState=3;

      score = score + 50;
      
      this.secondlevel.hide();
      this.information2.hide();
      this.ans2.hide();
      this.impot2.hide();

      this.line2.html("RiGhT AnS!");
      this.line2.position(displayWidth/2 -100, displayHeight/25);

      this.next3.html("NEXT PART ");
      this.next3.position(displayWidth/2-50,displayHeight/4);

    })

    this.next3.mousePressed(()=>{

      gameState=4;

      this.line2.hide();
      this.next3.hide();

      this.secondlevel2.html("second level-2 part");
      this.secondlevel2.position(displayWidth/2 -130, displayHeight/25);

      image(basket_image,displayWidth/2-700,displayHeight/6,250,250);

      image(plus_image,displayWidth/2-400,displayHeight/4,150,150);
    
      image(football_image,displayWidth/2-200,displayHeight/6,250,250);
    
      image(equal_image,displayWidth-600,250,displayHeight/3,100,100);
    
      this.ans3.position(displayWidth/2 - 100 , displayHeight/1 - 350);
    
      this.impot3.position(displayWidth/2-45,displayHeight/1-300);

    })

    this.impot3.mousePressed(()=>{
    
      gameState=5;

      score = score + 50;

      this.ans3.hide();
      this.impot3.hide();
      this.secondlevel2.hide();

     /*  this.basket_image.hide();
      this.football_image.hide();
      this.plus_image.hide();
      this.equal_image.hide(); */

      this.line3.html("PERFECT!");
      this.line3.position(displayWidth/2 -90, displayHeight/25);

      this.next4.html("NEXT level");
      this.next4.position(displayWidth/2-50,displayHeight/4);

    })

    this.next4.mousePressed(()=>{

    gameState=5;

    this.line3.hide();
    this.next4.hide();

    this.thirdlevel.html("Third level-first part");
    this.thirdlevel.position(displayWidth/2 -120, displayHeight/19);

    this.information3.html("if you pass this level you will get 150 points");
   this.information3.position(displayWidth/2-200,displayHeight/10);

    this.ques1.html("What two things you never eat for BREAKFAST ");
    this.ques1.position(displayWidth/2-350,displayHeight/7);

    this.ans4.position(displayWidth/2 - 100, displayHeight/4);
    this.impot4.position(displayWidth/2-45,displayHeight/3);

    })

    this.impot4.mousePressed(()=>{

    gameState=5;

    score = score + 50;

    this.thirdlevel.hide();
    this.information3.hide();
    this.ques1.hide();
    this.ans4.hide();
    this.impot4.hide();

    })


  }

  
}
