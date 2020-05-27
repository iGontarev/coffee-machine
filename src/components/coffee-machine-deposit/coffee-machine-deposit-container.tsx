import React, {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {useDepositList} from '../../hooks/use-deposit-list';
import {addCoins, subCoins} from '../../state-slices/coffee-machine-deposit';
import {CoffeeMachineDeposit} from './coffee-machine-deposit';

import {Money} from '../../types/money';


export const CoffeeMachineDepositContainer: FC = () => {
    const dispatch = useDispatch();
    const depositList = useDepositList(({coffeeMachine}) => coffeeMachine.deposit);

    const handleAdd = useCallback(
        (money: Money) => {
            dispatch(addCoins(money));
        },
        [dispatch],
    );

    const handleSub = useCallback(
        (money: Money) => {
            dispatch(subCoins(money));
        },
        [dispatch],
    );

    return (
        <CoffeeMachineDeposit
            deposit={depositList}
            onAdd={handleAdd}
            onSub={handleSub}
        />
    );
};
