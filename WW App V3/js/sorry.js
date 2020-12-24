class Sorry {

    constructor() {
      this.title=createElement('h1');
      this.title1=createElement('h2');
      this.retryButton=createButton('Retry')
    }
    hide(){
      this.title.hide();
      this.title1.hide();
      this.retryButton.hide();
    }
  
    display()
    {
        this.retryButton.position(displayWidth/2 , displayHeight/2 - 150);
        this.title.html("Whoops!");
        this.title.position(displayWidth/2 - 50, displayHeight/2 - 300);
        this.title1.html("Your password or username is incorrect! Please try again!");
        this.title1.position(displayWidth/2 - 290, displayHeight/2 - 230);
        this.retryButton.mousePressed(()=>{
            sorryScreen.hide();
            loginScreen=new Login();
            loginScreen.display();
           
          })
    }
  }
  