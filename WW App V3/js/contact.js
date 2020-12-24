class Contact {

    constructor() {
      this.title1 = createElement('h1');
      this.backButton=createButton('⬅️Back');
      this.signOutButton=createButton('Sign Out');
      
      this.title2=createElement('h3');
      this.email=createElement('h3');
    }
    hide(){
      this.title1.hide();
      this.backButton.hide();
      this.signOutButton.hide();
     
      this.title2.hide();
      this.email.hide();
    }
  
    display()
    {
      this.title1.html("Contact Us");
      this.title1.position(displayWidth/2 - 75, displayHeight/2 - 200);
      this.backButton.position(1300, displayHeight/2 - 400);
      this.signOutButton.position(1295, displayHeight/2-370);
     

      this.title2.html("You can contact us if you have any quaries or doubts");
      this.title2.position(displayWidth/2-180,displayHeight/2-155);

      this.email.html("You can contact us at worthyworkapp@gmail.com");
      this.email.position(displayWidth/2-170,displayHeight/2-130)

      this.signOutButton.mousePressed(()=>{
        contactScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })

      this.backButton.mousePressed(()=>{
        contactScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })
     
    }
  }