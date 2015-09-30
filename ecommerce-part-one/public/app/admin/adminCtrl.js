angular.module('ecommerce')
.controller('adminCtrl', function($scope, getProducts, adminService) {

    $scope.products = getProducts;
    console.log(getProducts);

    $scope.addProduct = function(newProduct) {
        console.log('Adding');
        adminService.addProduct(newProduct).then(function(resp) {
            $scope.products = resp;
        });
    };

    $scope.updateProduct = function(id, product) {
        adminService.updateProduct(id, product).then(function(resp) {
            adminService.getProducts().then(function(resp) {
                $scope.products = resp;
                $scope.showUpdateForm = false;
            });

        });
    };

    $scope.deleteProduct = function(id, index) {
        adminService.deleteProduct(id).then(function(resp) {
            console.log('Deleted it', resp);
            $scope.products.splice(index, 1);
        });
    };

});
