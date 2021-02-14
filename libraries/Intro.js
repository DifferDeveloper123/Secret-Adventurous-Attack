class Intro{

    constructor(){
 
        this.input = createInput("Your name");

        this.button = createButton("Log in");

        this.greeting = createElement('h2');

        this.tittle = createElement('h1');

    }

    hide(){

        this.input.hide();
        this.button.hide();
        this.tittle.hide();
        this.greeting.hide();

    }

    display(){

    this.title.html("Log in to the Secret Adventurous Attack");
    this.title.position(width/2 - 40, 0);

    this.input.position(width/2 - 40 , height/2 - 80);

    this.button.position(width/2 + 30, height/2);
    2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      this.button2 = createButton('Done');
      this.button2.position(width/2 + 30, height/2);

      this.button2.mousePressed(() =>{

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.button2.hide();

      })

      player.name = this.input.value();

      this.greeting.html("Hello " + player.name + "!" + "You are now logged in");

      this.greeting.position(width/2 - 70, height/4);

    });

    }
}

<input type="text" value="Your name" id="this.button"></input>
