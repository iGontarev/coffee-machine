import React from 'react';

import {UserDepositContainer} from './components/user-deposit';
import {CoffeeMachine} from './components/coffee-machine';
import {CoffeeMachineDepositContainer} from './components/coffee-machine-deposit';
import {CoffeeMachineAssortmentContainer} from './components/coffee-machine-assortment';
import {CoffeeMachineBalanceContainer} from './components/coffee-machine-balance';

export const App = () => {
  return (
      <div>
          <div style={{width: 250}}>
              <UserDepositContainer />
          </div>
          <div style={{width: 400}}>
              <CoffeeMachine>
                  <CoffeeMachineBalanceContainer />
                  <CoffeeMachineDepositContainer />
                  <CoffeeMachineAssortmentContainer />
              </CoffeeMachine>
          </div>
      </div>
  );
}
