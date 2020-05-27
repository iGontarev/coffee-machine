import React, {FC} from 'react';

import {CoffeeMachineDepositMoney} from './coffee-machine-deposit-money';

import {Money} from '../../types/money';

type CoffeeMachineDepositProps = {
    deposit: Money[];
    onAdd: (money: Money) => void;
    onSub: (money: Money) => void;
}

export const CoffeeMachineDeposit: FC<CoffeeMachineDepositProps> = props => {
    const {
        deposit,
        onAdd,
        onSub,
    } = props;

    return (
        <fieldset>
            <legend>Депозит</legend>
            {deposit.map(({denomination, count}) => (
                <CoffeeMachineDepositMoney
                    key={denomination}
                    denomination={denomination}
                    count={count}
                    onAdd={onAdd}
                    onSub={onSub}
                />
            ))}
        </fieldset>
    );
};
