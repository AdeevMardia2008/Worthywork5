class Yay {

    constructor() {
      this.continueButton = createButton('Continue');
      this.title2 = createElement('h1');
      this.title1 = createElement('h1');
      this.text = createElement('h2');
      
      this.signOutButton=createButton('Sign Out');
      this.contactButton=createButton('Contact Us');
    }
    hide(){
      this.continueButton.hide();
      this.title1.hide();
      this.title2.hide();
      this.text.hide();
     
      this.signOutButton.hide();
      this.contactButton.hide();
    }
  
    display()
    {
      this.title1.html("Congratulations!");
      this.title1.position(displayWidth/2 - 80, displayHeight/2 - 200);

      this.title2.html("Your Account has Successfully been Created");
      this.title2.position(displayWidth/2 - 250, displayHeight/2 - 150);

      this.continueButton.position(displayWidth/2 - 5, displayHeight/2);

      this.text.html("Please click CONTINUE to select what to Donate");
      this.text.position(displayWidth/2 - 200, displayHeight/2 - 100);

    
      this.signOutButton.position(1295, displayHeight/2-370);
      this.contactButton.position(1290,displayHeight/2-340)
      this.contactButton.mousePressed(()=>{
        congratulationsScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.signOutButton.mousePressed(()=>{
        congratulationsScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })

     

      this.continueButton.mousePressed(()=>{
        congratulationsScreen.hide();
        userValidation=new ValidateUser();
        userValidation.read();
      })
    }
  }
  