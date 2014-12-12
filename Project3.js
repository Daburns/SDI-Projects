// Dennis Burns Jr
//SDI 1411
//Project 3
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
    
//JSON Data
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

//Procedure
var TimetoEat = function(GuestToArrive){
    if (GuestToArrive < 5) {
    console.log("Not time to party" +  GuestToArrive + "," + "Waiting for more peopole to arrive")   
    }else{
    console.log("Time to party" + GuestToArrive + "Everyone is here");    

    }
    
};

//Boolean
var PartyTime = {
    Quarters:function(Qtr1,Qtr2,Qtr3,Qrt4){
    if(Qtr1 + Qtr2 + Qtr3 + Qtr4 > 5){
        var OverTime = true
        console.log("Game In OverTime Keep The Party Going + May Have to Order More Food")
    }else{
