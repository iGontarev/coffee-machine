import React, {FC} from 'react';

type CoffeeMachineBalanceProps = {
    balance: number;
    onGetSurrender: () => void;
}

export const CoffeeMachineBalance: FC<CoffeeMachineBalanceProps> = ({balance, onGetSurrender}) => {
    return (
        <fieldset>
            <legend>Внесенная сумма</legend>
            <strong>{balance} ₽</strong>
            &nbsp;
            <button
                type={'button'}
                disabled={balance < 1}
                onClick={onGetSurrender}
            >
                Сдача
            </button>
        </fieldset>
    );
};
