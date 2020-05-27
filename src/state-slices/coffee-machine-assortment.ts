import {createReducer} from '@reduxjs/toolkit';

import {Assortment} from '../types/assortment';
import {CoffeeMachineAssortmentState} from '../types/coffee-machine-assortment';

export const coffeeMachineAssortmentReducer = createReducer<CoffeeMachineAssortmentState>({
    [Assortment.tea]: {
        price: 0,
        count: 0,
    },
    [Assortment.coffee]: {
        price: 0,
        count: 0,
    },
    [Assortment.whiteCoffee]: {
        price: 0,
        count: 0,
    },
    [Assortment.juice]: {
        price: 0,
        count: 0,
    },
}, {});

