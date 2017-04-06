angular.module('inventory').controller('HeaderController', function ($scope, UserService) {
  $scope.logged = UserService.get();

  $scope.submitLogin = function (login) {
    login.time = new Date();
    UserService.set(login);
    $scope.logged = login;
    $scope.login = null;
  };
});
