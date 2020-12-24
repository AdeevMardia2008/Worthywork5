class ValidateUser{
    constructor(){

    }
    async read(){
      //user=new User();
      var userRef=await database.ref('users').once("value");
      if(userRef.exists()){
          allUsers=userRef.val();
      }
       loginScreen=new Login();
       loginScreen.display();
    }
    validate(){
        var uname=loginScreen.userID.value();
        var pw=loginScreen.password.value();
        console.log(uname);
        console.log(pw);
        
        for(var u in allUsers){
            if (allUsers[u].userID===uname&&allUsers[u].password===pw){
                login=true;
                break;
            }
            else{
              login=false;
            }
            
        }
        console.log(login);
        if(login===true){
            loginScreen.hide();
            console.log("login is correct");
            donateScreen=new Donate();
            donateScreen.display();
        }
        else{
            sorryScreen=new Sorry();
            sorryScreen.display();
        }
    }
}