(function() {
  "use strict";

  var app = angular.module("app", []);
    app.controller("ShoppingListController1" , ShoppingListController1);
    app.controller("ShoppingListController2" , ShoppingListController2);
    app.service("ShoppingListService" , ShoppingListService);


  ShoppingListController1.$inject = ["ShoppingListService"];
  function ShoppingListController1(ShoppingListService) {
    

    this.buyList = ShoppingListService.getBuyList();

    this.buyItem = function(index) {
      ShoppingListService.buyItem(index);
    };
  }


  ShoppingListController2.$inject = ["ShoppingListService"];
  function ShoppingListController2(ShoppingListService) {
    

    this.boughtList = ShoppingListService.getBoughtList();
  }


  
  function ShoppingListService() {
    var service = this;

    var buyList = [{ name : "Cookies",
                     quantity : "10"} , 
                   { name : "Chips",
                     quantity : "5"},
                   { name : "Coke",
                     quantity : "2"},
                   { name : "Cake",
                     quantity : "1"},
                   { name : "Candles",
                     quantity : "10"}];

    var boughtList = [];

    service.getBuyList = function () {
      return buyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

    service.buyItem = function (index) {
      boughtList.push(buyList[index]);
      buyList.splice(index, 1);
    };
  }
})();