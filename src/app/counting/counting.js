angular
  .module('app')
  .component('counting', {
    templateUrl: 'app/counting/counting.html',
    controller() {
      const ctrl = this;

      ctrl.sum = 0;

      ctrl.bills = [
        {value: 100, color: '#cdeaf0', amount: 5},
        {value: 50, color: '#f8e8c7'},
        {value: 20, color: '#f9efcc'},
        {value: 10, color: '#f2d0c7'},
        {value: 5, color: '#f1ecf3'},
        {value: 2, color: '#d9ecfa'}
      ];

      ctrl.updateAmount = (index, amount) => {
        ctrl.bills[index].amount = amount;
        updateSum();
      };

      ctrl.reset = () => {
        ctrl.bills = ctrl.bills.map(item => {
          item.amount = 0;
          return item;
        });

        updateSum();
      };

      function updateSum() {
        ctrl.sum = ctrl.bills.reduce((a, b) => {
          if (angular.isObject(a)) {
            a = (a.amount || 0) * a.value;
          }

          return a + (b.amount || 0) * b.value;
        });
      }
    }
  });
