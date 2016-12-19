angular
  .module('app')
  .component('counting', {
    templateUrl: 'app/counting/counting.html',
    controller() {
      const vm = this;

      vm.bills = [
        {value: 100, color: '#cdeaf0'},
        {value: 50, color: '#f8e8c7'},
        {value: 20, color: '#f9efcc'},
        {value: 10, color: '#f2d0c7'},
        {value: 5, color: '#f1ecf3'},
        {value: 2, color: '#d9ecfa'}
      ];
    }
  });
