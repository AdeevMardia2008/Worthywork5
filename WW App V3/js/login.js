class Login {

    constructor() {
      this.loginButton = createButton('Login');
      this.title2 = createElement('h2');
      this.title1 = createElement('h1');
      
      this.userID = createInput('User ID');
      this.password = createInput('Password','password');
      this.passwordText = createElement('h4');
      this.contactButton=createButton('Contact Us');
    }
    hide(){
      this.loginButton.hide();
      this.title1.hide();
      this.title2.hide();
      this.userID.hide();
      this.password.hide();
      this.passwordText.hide();
      this.contactButton.hide();
    }
  
    display()
    {
      this.title1.html("Login");
      this.title1.position(displayWidth/2 - 35, displayHeight/2 - 200);

      this.title2.html("To get into your Account");
      this.title2.position(displayWidth/2 - 115, displayHeight/2 - 150);

      this.loginButton.position(displayWidth/2 - 5, displayHeight/2 +50);

     this.userID.position(displayWidth/2 - 70, displayHeight/2 - 55);

     this.contactButton.position(1290,displayHeight/2-340)
      this.contactButton.mousePressed(()=>{
        loginScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.password.position(displayWidth/2 - 70, displayHeight/2 - 15);
      this.passwordText.position(displayWidth/2 - 150, displayHeight/2 );
      this.passwordText.html("(Enter the Password you used to create your Account)");
      this.loginButton.mousePressed(()=>{
        loginScreen.hide();
        //donateScreen=new Donate();
        //donateScreen.display();
        userValidation.validate();
      })
    }
  }
  