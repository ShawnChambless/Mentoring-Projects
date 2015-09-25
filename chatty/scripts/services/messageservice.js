angular.module('chattyApp')
  .factory('MessageService', function MessageService($http) {
    return {
        getMessages: function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080'
            }).then(function(resp) {
                return resp;
            });
        },

        sendMessage: function(message) {
            return $http({
                method: 'POST',
                url:    'http://localhost:8080',
                data: {
                    message: message
                }
            }).then(function(resp) {
                return resp;
            });
        }

    };
  });
