import React, {FC, useCallback} from 'react';

import {Denomination} from '../../types/denomination';
import {Money} from '../../types/money';

type UserDepositMoneyProps = {
    denomination: Denomination;
    count: number
    onClick: (money: Money) => void;
}

export const UserDepositMoney: FC<UserDepositMoneyProps> = props => {
    const {
        denomination,
        count,
        onClick,
    } = props;

    const handleClick = useCallback(
        () => {
            onClick({denomination, count: 1});
        },
        [onClick, denomination],
    );

    return (
        <p>
            <button
                type={'button'}
                disabled={count < 1}
                onClick={handleClick}
            >
                Внести
            </button>
            &nbsp;
            <strong>{denomination} ₽</strong> = {count} шт.
        </p>
    );
};

