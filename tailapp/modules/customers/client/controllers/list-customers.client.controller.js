(function () {
  'use strict';
  
  var customersApp = angular.module('customers');

  customersApp.controller('CustomersListController', CustomersListController);
  customersApp.controller('CustomersCreateController', CustomersCreateController);
  customersApp.controller('CustomersEditController', CustomersEditController);

  CustomersListController.$inject = ['CustomersService'];

  function CustomersListController(CustomersService) {
    var vm = this;

    vm.customers = CustomersService.query();
  }

  CustomersCreateController.$inject = ['CustomersService'];

  function CustomersCreateController(CustomersService) {
    var vm = this;

    vm.customers = CustomersService.query();
  }
})();
