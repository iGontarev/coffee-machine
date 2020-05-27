import React, {FC, useCallback} from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';

import {convertBalanceToDeposit} from '../../libs/convert-balance-to-deposit';
import {subtractDeposits} from '../../libs/subtract-deposits';
import {resetState} from '../../state-slices/coffee-machine-acceptor';
import {setState as coffeeMachineSetCoins} from '../../state-slices/coffee-machine-deposit';
import {addCoins as userDepositAddCoins} from '../../state-slices/user-deposit';
import {CoffeeMachineBalance} from './coffee-machine-balance';

import {AppState} from '../../types/app';

export const CoffeeMachineBalanceContainer: FC = () => {
    const dispatch = useDispatch();

    const coffeeMachineDeposit = useSelector((
        {coffeeMachine}: AppState) => coffeeMachine.deposit,
        shallowEqual
    );

    const balance = useSelector((
        {coffeeMachine}: AppState) => coffeeMachine.acceptor,
        shallowEqual
    );

    const handleGetSurrender = useCallback(
        () => {
            const newUserDeposit = convertBalanceToDeposit(balance, coffeeMachineDeposit);
            dispatch(coffeeMachineSetCoins(subtractDeposits(coffeeMachineDeposit, newUserDeposit)));
            dispatch(userDepositAddCoins(newUserDeposit));
            dispatch(resetState());
        },
        [dispatch, coffeeMachineDeposit, balance],
    );

    return (
        <CoffeeMachineBalance
            balance={balance}
            onGetSurrender={handleGetSurrender}
        />
    );
};
