class User {

    constructor() {
      
      this.name = null;
      this.age = null;
      this.gender = null;
      
      this.email = null;
      this.phone =null;
  
      this.adress = null;
     
      this.userID = null;
      this.password = null;
      
  
    }
    updateUser(){
        var userIndex = "users/"+this.userID;
        database.ref(userIndex).set({
          userID:this.userID,
          password:this.password,
          name : this.name,
          age : this.age,
          gender : this.gender,
          
          email : this.email,
          phone : this.phone,
      
          adress : this.adress
        });
      }
}