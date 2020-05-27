import {UserDepositState} from './user-deposit';
import {CoffeeMachineState} from './coffee-machine';

export type AppState = {
    userDeposit: UserDepositState;
    coffeeMachine: CoffeeMachineState
};
