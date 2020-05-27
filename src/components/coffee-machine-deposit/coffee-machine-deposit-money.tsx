import React, {FC, useCallback} from 'react';

import {Denomination} from '../../types/denomination';
import {Money} from '../../types/money';

type CoffeeMachineDepositMoneyProps = {
    denomination: Denomination;
    count: number
    onAdd: (money: Money) => void;
    onSub: (money: Money) => void;
}

export const CoffeeMachineDepositMoney: FC<CoffeeMachineDepositMoneyProps> = props => {
    const {
        denomination,
        count,
        onAdd,
        onSub,
    } = props;

    const handleAdd = useCallback(
        () => {
            onAdd({denomination, count: 1});
        },
        [onAdd, denomination],
    );

    const handleSub = useCallback(
        () => {
            onSub({denomination, count: 1});
        },
        [onSub, denomination],
    );

    return (
        <p>
            <button
                type={'button'}
                onClick={handleAdd}
            >
                +
            </button>
            <button
                type={'button'}
                disabled={count < 1}
                onClick={handleSub}
            >
                -
            </button>
            &nbsp;
            <strong>{denomination} ₽</strong> = {count} шт.
        </p>
    );
};

