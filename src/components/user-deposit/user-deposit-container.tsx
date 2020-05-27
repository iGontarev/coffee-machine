import React, {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {useDepositList} from '../../hooks/use-deposit-list';
import {subCoins} from '../../state-slices/user-deposit';
import {addBalance} from '../../state-slices/coffee-machine-acceptor';
import {addCoins} from '../../state-slices/coffee-machine-deposit';
import {UserDeposit} from './user-deposit';

import {Money} from '../../types/money';

export const UserDepositContainer: FC = () => {
    const dispatch = useDispatch();
    const depositList = useDepositList(({userDeposit}) => userDeposit);

    const handleAdd = useCallback(
        (money: Money) => {
            dispatch(subCoins(money));
            dispatch(addCoins(money));
            dispatch(addBalance(money.count * Number(money.denomination)));
        },
        [dispatch],
    );

    return (
        <UserDeposit
            deposit={depositList}
            onClick={handleAdd}
        />
    );
};
