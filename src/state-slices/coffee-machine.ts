import {combineReducers} from '@reduxjs/toolkit';

import {coffeeMachineDepositReducer} from './coffee-machine-deposit';
import {coffeeMachineAssortmentReducer} from './coffee-machine-assortment';
import {CoffeeMachineAcceptorReducer} from './coffee-machine-acceptor';

import {CoffeeMachineState} from '../types/coffee-machine';

export const coffeeMachineReducer = combineReducers<CoffeeMachineState>({
    deposit: coffeeMachineDepositReducer,
    assortment: coffeeMachineAssortmentReducer,
    acceptor: CoffeeMachineAcceptorReducer,
})
