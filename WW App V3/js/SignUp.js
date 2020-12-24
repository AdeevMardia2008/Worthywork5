class SignUp {

    constructor() {
      this.submitButton = createButton('Sign Up');
      this.title2 = createElement('h2');
      this.title1 = createElement('h1');
      this.name = createInput('Name');
      this.age = createInput('Age');
      this.gender = createRadio();
      this.gender.option('Male');
      this.gender.option('Female');
      this.email = createInput('Email');
      this.phone = createInput('Phone No.');
      this.phoneText1 = createElement('h5');
      this.phoneText2 = createElement('h5');
      this.adress = createInput('Address');
      this.adressText = createElement('h5');
      this.userID = createInput('User ID');
      this.password = createInput('Password','password');
      this.passwordText = createElement('h5');
      this.confirmPassword = createInput('Confirm Password','password');
      this.text = createElement('h4');
      this.contactButton=createButton('Contact Us');
    }
    hide(){
      this.submitButton.hide();
      this.title1.hide();
      this.title2.hide();
      this.name.hide();
      this.age.hide();
      this.gender.hide();
      this.email.hide();
      this.phone.hide();
      this.phoneText1.hide();
      this.phoneText2.hide();
      this.adress.hide();
      this.adressText.hide();
      this.userID.hide();
      this.password.hide();
      this.passwordText.hide();
      this.confirmPassword.hide();
      this.text.hide();
      this.contactButton.hide();
    }
  
    display()
    {
      this.title1.html("Sign Up");
      this.title1.position(displayWidth/2 - 35, displayHeight/2 - 200);

      this.title2.html("To show your Kindness");
      this.title2.position(displayWidth/2 - 85, displayHeight/2 - 550);

      this.submitButton.position(displayWidth/2 - 5, displayHeight/2 + 340);

      this.name.position(displayWidth/2 - 50, displayHeight/2 - 60);

      this.age.position(displayWidth/2 - 50, displayHeight/2 - 30);

      this.gender.position(displayWidth/2 - 50, displayHeight/2 );

      this.email.position(displayWidth/2 - 50, displayHeight/2 );

      this.phone.position(displayWidth/2 - 50, displayHeight/2 +60);

      this.phoneText1.position(displayWidth/2 - 30, displayHeight/2 + 70);
      this.phoneText1.html("(Enter 10 Digit Number)");
      
      this.phoneText2.position(displayWidth/2 - 80, displayHeight/2 + 90);
      this.phoneText2.html("(We will not trouble you with spam calls)");

      this.adress.position(displayWidth/2 - 50, displayHeight/2 + 130);
      this.adressText.position(displayWidth/2 - 115, displayHeight/2 + 133);
      this.adressText.html("(Currently, We are operational only in Chennai, TN,India)");

      this.userID.position(displayWidth/2 - 50, displayHeight/2 + 180);

      this.password.position(displayWidth/2 - 50, displayHeight/2 + 210);
      this.passwordText.position(displayWidth/2 - 30, displayHeight/2 + 215);
      this.passwordText.html("(Min 6 Characters)");
      this.confirmPassword.position(displayWidth/2 - 50, displayHeight/2 + 260);

      this.text.position(displayWidth/2 - 60, displayHeight/2 - 120);
      this.text.html("(Please fill up all the Details)");

      this.contactButton.position(1290,displayHeight/2-340)
      this.contactButton.mousePressed(()=>{
        signUpScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.submitButton.mousePressed(()=>{
        signUpScreen.hide();
        
        user=new User();
        user.userID=this.userID.value();
        user.password=this.password.value();
        user.name = this.name.value();
        user.age = this.age.value();
        user.gender = this.gender.value();
        
        user.email = this.email.value();
        user.phone = this.phone.value();
    
        user.adress = this.adress.value();
        user.updateUser();
        congratulationsScreen = new Yay();
        congratulationsScreen.display();
      })
    }
  }
  