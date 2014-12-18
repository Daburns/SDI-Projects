// Dennis Burns Jr
<<<<<<< HEAD
//SDI 1411
//Project 3
=======
// SDI 1411
// Project 3
>>>>>>> FETCH_HEAD
// Superbowl Menu

// My Variables 
var FoodList = "Menu";
    chickenwings= " 12 dollars";
    pizza = "15 dollars";
    subsandwiches = "13 dollars";
    chips = "2 dollars";
    soda = "5 dollars";
    beer = "10 dollars";
    MenuItems = 7;// maybe 6 items
    MenuItemsQuantity=[3,5,4,2,7,10]
    ChowTime = true;
    
<<<<<<< HEAD
//JSON Data
=======
// JSON Data
>>>>>>> FETCH_HEAD
var FoodList = {
    "MenuItems": [
        {"Item":"chickenwings",
        "cost": "12 dollars"
        },
        {"MenuItems":"pizza",
        "cost": "15 dollars"
        },
        {"Item":"sandwiches",
        "cost": "13 dollars"
        },
        {"MenuItems":"chips",
        "cost": "2 dollars"
        },
        {"Item":"soda",
        "cost": "5 dollars"
        },
        {"MenuItems":"beer",
        "cost": "10 dollars"
        },
    
    ]
    
};

<<<<<<< HEAD
//Procedure
=======
// Procedure
>>>>>>> FETCH_HEAD
var TimetoEat = function(GuestToArrive){
    if (GuestToArrive < 5) {
    console.log("Not time to party" +  GuestToArrive + "," + "Waiting for more peopole to arrive")   
    }else{
    console.log("Time to party" + GuestToArrive + "Everyone is here");    

    }
    
};

<<<<<<< HEAD
//Boolean
=======
// Boolean
>>>>>>> FETCH_HEAD
var PartyTime = {
    Quarters:function(Qtr1,Qtr2,Qtr3,Qrt4){
    if(Qtr1 + Qtr2 + Qtr3 + Qtr4 > 5){
        var OverTime = true
        console.log("Game In OverTime Keep The Party Going + May Have to Order More Food")
        return OverTime;
    }else{
        var GameOver = false
        console.log("Game Over Time to Wrap Up The Party")
        return GameOver
        }
}
 
<<<<<<< HEAD
};    
=======
};

// Numbers
var noRoom = {
    full: function(HouseFull) {
        while( HouseFull > 10) {
        console.log ("House is Full" + "HouseFull + no more guest")
        HouseFull = HouseFull + 5;
        
        }
        return HouseFull;
    }
    
    
};

// String

var beverages = {
    beverageChoice: function(choice1,choice2){
    beverage1 =("assortment of sodas");
    beverage2 =("draft beer");
    return (choice1 + beverage1 + " While, the " + choice2 + beverage2);
    }
};
var guestChoice = beverages.beverageChoice('"A"','"B"');


// Method,Accsssor and Mutator
var  dayslefttillparty = {
    "Mon": 6,
    "tues": 5,
    "wed": 4,
    "thur": 3,
    "fri": 2,
    "sat": 1,
    "sun": 0,
    "coutdown": function(){
    var weekday = this.mon + this.tues + this wed + this thur + this fri;
    var weekend = this sun;
    var dayslefttillparty = weekday - 5;
    return weekend days;    
        
    }
    
    
}





>>>>>>> FETCH_HEAD





























