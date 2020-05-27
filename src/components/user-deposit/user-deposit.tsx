import React, {FC} from 'react';

import {UserDepositMoney} from './user-deposit-money';

import {Money} from '../../types/money';

type UserDepositProps = {
    deposit: Money[];
    onClick: (money: Money) => void;
}

export const UserDeposit: FC<UserDepositProps> = props => {
    const {
        deposit,
        onClick,
    } = props;

    return (
        <fieldset>
            <legend>Депозит пользователя</legend>
            {deposit.map(({denomination, count}) => (
                <UserDepositMoney
                    key={denomination}
                    denomination={denomination}
                    count={count}
                    onClick={onClick}
                />
            ))}
        </fieldset>
    );
};
