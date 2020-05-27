import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {userDepositReducer} from '../state-slices/user-deposit';
import {coffeeMachineReducer} from '../state-slices/coffee-machine';

import {AppState} from '../types/app';

const reducer = combineReducers({
    userDeposit: userDepositReducer,
    coffeeMachine: coffeeMachineReducer,
});

export const configureAppStore = (preloadedState: AppState) => configureStore({
    reducer,
    preloadedState,
});
