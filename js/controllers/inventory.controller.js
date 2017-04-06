angular.module('inventory').controller('InventoryController', function($scope, InvService) {
    var salesTax = 0.0575;
    $scope.allItems = InvService.get();
    $scope.orderByField = 'adjustedPrice';

    $scope.submit = function(item) {
      item.id = Date.now();
        $scope.allItems.push(item);
        InvService.set($scope.allItems);
        $scope.newItem = {};
    };

    $scope.adjustedPrice = function(item) {
        item.adjustedPrice = null;
        var price = item.price;
        if (item.discount > 0) {
            price -= item.discount;
        }
        price += price * salesTax;
        item.adjustedPrice = price;
        return price;
    };

    $scope.saleTag = function(item) {
        if (item.discount > 0) {
            return './images/sale-tag.png';
        }
    };

    $scope.updateQty = function (item) {
        InvService.update(item);
    };
});
