import {createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';

export const resetState = createAction('coffee-machine-acceptor/reset');
export const addBalance = createAction<number>('coffee-machine-acceptor/add-balance');
export const subBalance = createAction<number>('coffee-machine-acceptor/sub-balance');

export const CoffeeMachineAcceptorReducer = createReducer<number>(0, {
    [addBalance.type]: (state, {payload}: PayloadAction<number>) => state + payload,
    [subBalance.type]: (state, {payload}: PayloadAction<number>) => state - payload,
    [resetState.type]: () => 0,
});
