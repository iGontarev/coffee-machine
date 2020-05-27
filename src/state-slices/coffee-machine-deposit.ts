import {createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';

import {Denomination} from '../types/denomination';
import {CoffeeMachineDepositState} from '../types/coffee-machine-deposit';
import {Deposit} from '../types/deposit';
import {Money} from '../types/money';

export const setState = createAction<Deposit>('coffee-machine-deposit/set-state');
export const addCoins = createAction<Money>('coffee-machine-deposit/add-coins');
export const subCoins = createAction<Money>('coffee-machine-deposit/sub-coins');

export const coffeeMachineDepositReducer = createReducer<CoffeeMachineDepositState>({
    [Denomination.one]: 0,
    [Denomination.two]: 0,
    [Denomination.five]: 0,
    [Denomination.ten]: 0
}, {
    [addCoins.type]: (state, {payload}: PayloadAction<Money>) => ({
        ...state,
        [payload.denomination]: state[payload.denomination] + payload.count,
    }),
    [subCoins.type]: (state, {payload}: PayloadAction<Money>) => ({
        ...state,
        [payload.denomination]: state[payload.denomination] - payload.count,
    }),
    [setState.type]: (state, {payload}: PayloadAction<Deposit>) => payload,
});

