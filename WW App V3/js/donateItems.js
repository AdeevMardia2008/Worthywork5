class DonateItems{
    constructor(){
        this.donationItems=null;
        this.userID=null;
        this.month=null;
        this.day=null;
        this.time=null;

    }
    addItems(){
        var itemRef="items/"+this.userID
        database.ref(itemRef).set({
            donationItems:this.donationItems,
            month:this.month,
            day:this.day,
            time:this.time
        })
    }
}