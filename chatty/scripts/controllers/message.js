angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    var messages = [];

    $scope.sendMessage = function(message) {
        messages.push(message);
        MessageService.sendMessage(message).then(function(response) {
            console.log(response);
        });
        $scope.newMessage = '';
    };

    $scope.getMessages = function() {
        MessageService.getMessages().then(function(resp) {
            messages = resp.data;
            $scope.messages = messages;
        });
    }();

});
