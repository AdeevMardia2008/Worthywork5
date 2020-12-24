class Donate {

    constructor() {
      this.title1=createElement('h1');
      this.item1=createCheckbox("Electronics",false);
      this.item2=createCheckbox("Garments and Footwear",false);
      this.item3=createCheckbox("Household Items",false);
      this.item4=createCheckbox("Furniture",false);
      this.item5=createCheckbox("Crockery and Cutlery",false);
      this.item6=createCheckbox("Games and Toys",false);
      this.item7=createCheckbox("Books",false);
      this.item8=createCheckbox("Sporting Goods",false);
      this.item9=createCheckbox("Other",false);
      this.donateButton=createButton('Donate');
     
      this.signOutButton=createButton('Sign Out');
      this.contactButton=createButton('Contact Us');

      this.title1=createElement('h1');
      this.title2=createElement('h3');
      this.month=createSelect();
      this.month.option('Month');
      this.month.option('January');
      this.month.option('February');
      this.month.option('March');
      this.month.option('April');
      this.month.option('May');
      this.month.option('June');
      this.month.option('July');
      this.month.option('August');
      this.month.option('September');
      this.month.option('October');
      this.month.option('November');
      this.month.option('December');

      this.day=createSelect();
      this.day.option('Day');
      this.day.option('1');
      this.day.option('2');
      this.day.option('3');
      this.day.option('4');
      this.day.option('5');
      this.day.option('6');
      this.day.option('7');
      this.day.option('8');
      this.day.option('9');
      this.day.option('10');
      this.day.option('11');
      this.day.option('12');
      this.day.option('13');
      this.day.option('14');
      this.day.option('15');
      this.day.option('16');
      this.day.option('17');
      this.day.option('18');
      this.day.option('19');
      this.day.option('20');
      this.day.option('21');
      this.day.option('22');
      this.day.option('23');
      this.day.option('24');
      this.day.option('25');
      this.day.option('26');
      this.day.option('27');
      this.day.option('28');
      this.day.option('29');
      this.day.option('30');

      this.time=createSelect();
      this.time.option('Time');
      this.time.option('10:00 am');
      this.time.option('10:30 am');
      this.time.option('11:00 am');
      this.time.option('11:30 am');
      this.time.option('12:00 am');
      this.time.option('12:30 am');
      this.time.option('13:00 am');
      this.time.option('13:30 am');
      this.time.option('14:00 am');
      this.time.option('14:30 am');
      this.time.option('15:00 am');
      this.time.option('15:30 am');
      this.time.option('16:00 am');
      this.time.option('16:30 am');
      this.time.option('17:00 am');
      this.time.option('17:30 am');
      this.time.option('18:00 am');

      //this.finishButton=createButton('Finish');
      this.profileButton=createButton('Profile');
      this.signOutButton=createButton('Sign Out');
      this.contactButton=createButton('Contact Us');

      this.username=createInput("userID");
    }
    hide(){
        this.title1.hide();
        this.item1.hide();
        this.item2.hide();
        this.item3.hide();
        this.item4.hide();
        this.item5.hide();
        this.item6.hide();
        this.item7.hide();
        this.item8.hide();
        this.item9.hide();
       this.donateButton.hide();
        
      this.signOutButton.hide();
      this.contactButton.hide();

      this.title1.hide();
      this.title2.hide();
      this.month.hide();
      this.day.hide();
      this.time.hide();
      //this.finishButton.hide();
      this.profileButton.hide();
      this.signOutButton.hide();
      this.contactButton.hide();
      this.username.hide();
    }
  
    display()
    {
      this.title1.html("Please Select atleast one item to Donate");
      this.title1.position(displayWidth/2 - 300, displayHeight/2 - 160);
      this.donateButton.position(displayWidth/2 - 70, displayHeight/2 + 265);
      this.item1.position(350,400);
      this.item2.position(650,400);
      this.item3.position(1020,400);
      this.item4.position(350,520);
      this.item5.position(650,520);
      this.item6.position(1020,520);
      this.item7.position(350,640);
      this.item8.position(650,640);
      this.item9.position(1020,640);

      this.username.position(displayWidth/2-120, displayHeight/2+300)

     
      this.signOutButton.position(1295, displayHeight/2-370);

      this.contactButton.position(1290,displayHeight/2-340);
      this.contactButton.mousePressed(()=>{
      donateScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.signOutButton.mousePressed(()=>{
        donateScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })
      this.profileButton.mousePressed(()=>{
        donateScreen.hide();
        profileScreen=new Profile();
        profileScreen.display();
      })

      this.donateButton.mousePressed(()=>{
        ditems.userID=this.username.value();
        if(this.item1.checked()){
          ditems.donationItems+="Electronics/";
        }
        if(this.item2.checked()){
          ditems.donationItems+="Garments and Footwear/";
        }
        if(this.item3.checked()){
          ditems.donationItems+="Household Items/";
        }
        if(this.item4.checked()){
          ditems.donationItems+="Furniture/";
        }
        if(this.item5.checked()){
          ditems.donationItems+="Crockery and Cutlery/";
        }
        if(this.item6.checked()){
          ditems.donationItems+="Games and Toys/";
        }
        if(this.item7.checked()){
          ditems.donationItems+="Books/";
        }
        if(this.item8.checked()){
          ditems.donationItems+="Sporting Goods/";
        }
        if(this.item9.checked()){
          ditems.donationItems+="Other/";
        }
        ditems.month=this.month.value();
        ditems.day=this.day.value();
        ditems.time=this.time.value();
          console.log(ditems.donationItems);
          ditems.addItems();
        donateScreen.hide();
        thankYouScreen=new ThankYou();
        thankYou.display();

      })
      this.month.position(670,350);
      this.title1.html("Please Select your preferred Date and Time");
      this.title1.position(500,250);
      this.title2.html("(We will collect your donations at this date and time)");
      this.title2.position(600,300);
      this.day.position(770,350);
      this.time.position(825,350);
      //this.finishButton.position(800,460);

      this.profileButton.position(1300, displayHeight/2 - 400);
      this.signOutButton.position(1295, displayHeight/2-370);

      this.contactButton.position(1290,displayHeight/2-340)
      this.contactButton.mousePressed(()=>{
        dateScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.signOutButton.mousePressed(()=>{
        dateScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })
      this.profileButton.mousePressed(()=>{
        dateScreen.hide();
        profileScreen=new Profile();
        profileScreen.display();
      })

      this.finishButton.mousePressed(()=>{
        dateScreen.hide();
        thankYouScreen=new ThankYou();
        thankYouScreen.display();
      })
    }
  }
  