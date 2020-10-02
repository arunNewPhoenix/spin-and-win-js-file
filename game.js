
let prizes_config = {
    count:12,
    prizes_name:["3000 credits","35% off","hard luck","70% off","swagpack","100% off","netflix","50% off","amazon voucher","2 extra spins","CB t-shirt",
                "CB book"]
}



let config ={
    type:Phaser.CANVAS,
    width: 800,
    height:400,
    backgroundColor:0xffcc00,
    
    scene:{
        
        preload:preload,
        create:create,
        update:update,
    
}
    
    
};

let game =new Phaser.Game(config);

function preload()
{
    console.log("in preload function");
    //load object load some background object
    
    this.load.image("background","C:/Users/user/Desktop/my-game/assets02/back.jpg");
    this.load.image("pin","C:Users/user/Desktop/my-game/assets02/pin.png");
    this.load.image("stand","C:/Users/user/Desktop/my-game/assets02/stand.png");
    this.load.image("wheel","C:/Users/user/Desktop/my-game/assets02/wheel.png");
}

function create()
{
    console.log("in create function");
    //create background image
    let W= game.config.width;
    let H= game.config.height;
    let background = this.add.sprite(0,0,"background");
    background.setPosition(W/2,H/2);
    background.setScale(0.20);
    
    //lets create a wheel
     this.wheel=this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.15);
   // this.wheel.alpha=0.5;
   //  
    
    
    //lets create a pin
    let pin =this.add.sprite(W/2,H/2-150,"pin");
    pin.setScale(0.15);
    //pin.depth=;
    pin.depth=2;
   
    
    //lets create a stand
    let stand = this.add.sprite(W/2,H/2+150,"stand");
    stand.setScale(0.15);
    stand.depth=1;
    
    //event listners for mouse click
    this.input.on("pointerdown",spinwheel,this);
    
    //let create text object
    font_style ={
        font:"bold 30px Arial",
        align:"center",
        color:"red",
    }
    this.game_text=this.add.text(10,10,"welcome to spin and win",font_style);
    
    
    //scale
    //wheel.scaleX = 2;
}
function update()
{
    console.log("in uppdate function");
   // this.wheel.angle += 1;
    //this.wheel.alpha -=0.05;
   // this.wheel.scaleX +=0.05;
    //this.wheel.scaleY +=0.05;
    //this.wheel.scaleX -=0.05;
    //this.wheel.scaleY -=0.05;
}
function spinwheel()
{
    console.log("you clicked the mouse");
    console.log("start spinning");
    this.game_text.setText("you clicked the mouse.!");
    
    let rounds = Phaser.Math.Between(2,5);
    //console.log(rounds);
    let degrees = Phaser.Math.Between(0,11)*30;
    
    let total_angle = rounds*360 + degrees;
    
    
    let idx = prizes_config.count - 1 - Math.floor(degrees/(360/prizes_config.count));
    
    tween = this.tweens.add({
        targets: this.wheel,
        angle:total_angle,
        ease:"Cubic.easeOut",
        duration: 4000,
        callbackScope:this,
        //scaleX:0.5,
        //scaleY:0.5,
        onComplete:function()
        {
        this.game_text.setText("you won something::"+prizes_config.prizes_name[idx]);
    }
    });
}

