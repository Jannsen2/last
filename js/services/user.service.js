angular.module('inventory').service('UserService', function (localStorageService) {
    function getUser() {
      return localStorageService.get('user');
    }

    function setUser(login) {
      localStorageService.set('user', login);
    }

    return {
      get: getUser,
      set: setUser
    };
});
