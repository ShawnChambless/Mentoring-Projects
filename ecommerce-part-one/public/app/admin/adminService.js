angular.module('ecommerce')
.service('adminService', function($http) {

    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/products'
        }).then(function(resp) {
            return resp.data;
        });
    };

    this.addProduct = function(newProduct) {
        console.log(newProduct);
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/products',
            data: {
                product: newProduct
            }
        }).then(function(resp) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/api/products'
            }).then(function(resp) {
                return resp.data;
            });
        });
    };

    this.updateProduct = function(id, newProduct) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/products/' + id,
            data: {
                name: newProduct.name,
                price: newProduct.price,
                qty: newProduct.qty
            }
        }).then(function(resp) {
            return resp;
        });
    };

    this.deleteProduct = function(id) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/products/' + id
        }).then(function(resp) {
            return resp;
        });
    };

});
