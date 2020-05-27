import {CoffeeMachineDepositState} from './coffee-machine-deposit';
import {CoffeeMachineAssortmentState} from './coffee-machine-assortment';

export type CoffeeMachineState = {
    deposit: CoffeeMachineDepositState;
    assortment: CoffeeMachineAssortmentState;
    acceptor: number;
};
