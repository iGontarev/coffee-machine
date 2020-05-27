import {createReducer, createAction, PayloadAction} from '@reduxjs/toolkit';

import {Denomination} from '../types/denomination';
import {UserDepositState} from '../types/user-deposit';
import {Money} from '../types/money';
import {Deposit} from '../types/deposit';
import {sumDeposits} from '../libs/sum-deposits';

export const addCoins = createAction<Deposit>('user-deposit/add-coins');
export const subCoins = createAction<Money>('user-deposit/sub-coins');

export const userDepositReducer = createReducer<UserDepositState>({
    [Denomination.one]: 0,
    [Denomination.two]: 0,
    [Denomination.five]: 0,
    [Denomination.ten]: 0
}, {
    [subCoins.type]: (state, {payload}: PayloadAction<Money>) => ({
        ...state,
        [payload.denomination]: state[payload.denomination] - payload.count,
    }),
    [addCoins.type]: (state, {payload}: PayloadAction<Deposit>) => sumDeposits(state, payload),
});

