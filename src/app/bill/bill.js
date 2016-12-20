/* global tinycolor */

angular
  .module('app')
  .component('bill', {
    templateUrl: 'app/bill/bill.html',
    bindings: {
      value: '@',
      color: '@',
      onAmountChanged: '&'
    },
    controller() {
      const ctrl = this;
      ctrl.sum = 0;

      ctrl.$onChanges = () => {
        const fontColor = tinycolor(ctrl.color);
        fontColor.darken(50);
        fontColor.saturate(10);

        ctrl.bgcolor = {"background-color": ctrl.color, "color": fontColor.toHexString()};
      };

      ctrl.addAmount = amount => {
        ctrl.amount = (ctrl.amount || 0) + amount;
        ctrl.amountChanged();
      };

      ctrl.amountChanged = () => {
        ctrl.sum = ctrl.amount * ctrl.value;

        if (ctrl.onAmountChanged) {
          const args = {amount: ctrl.amount, sum: ctrl.sum};
          ctrl.onAmountChanged(args);
        }
      };
    }
  });
