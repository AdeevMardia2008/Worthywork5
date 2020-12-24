class Welcome {

    constructor() {
      this.loginButton = createButton('Login');
      this.joinUsButton=createButton('Join Us');
      this.accountTitle = createElement('h2');
      this.title1 = createElement('h1');
      this.title2 = createElement('h3');
      this.contactButton=createButton('Contact Us');
      //this.terms=createA()
    }
    hide(){
      this.loginButton.hide();
      this.joinUsButton.hide();
      this.accountTitle.hide();
      this.title1.hide();
      this.title2.hide();
      this.contactButton.hide();
    }
  
    display()
    {
      this.title1.html("Join our Community to make the World a Better Place");
      this.title1.position(displayWidth/2 - 400, 200);
      this.accountTitle.html("Account:");
      this.accountTitle.position(displayWidth/2 - 50, displayHeight/2 - 150)
      this.loginButton.position(displayWidth/2 +75, displayHeight/2 - 60);
      this.joinUsButton.position(displayWidth/2 - 36,displayHeight/2 - 90);
      this.title2.html("Aldready have an Account?");
      this.title2.position(displayWidth/2 - 150,displayHeight/2 -80);

      this.contactButton.position(1290,displayHeight/2-400)
      this.contactButton.mousePressed(()=>{
        welcomeScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.joinUsButton.mousePressed(()=>{
        welcomeScreen.hide();
        signUpScreen=new SignUp();
        signUpScreen.display();
      })
      this.loginButton.mousePressed(()=>{
        welcomeScreen.hide();
        //loginScreen=new Login();
        //loginScreen.display();
        userValidation=new ValidateUser();
        userValidation.read();
      })
    }
  }
  