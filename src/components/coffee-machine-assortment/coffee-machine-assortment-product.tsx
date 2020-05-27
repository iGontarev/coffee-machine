import React, {FC, useCallback} from 'react';

import {productsTitles} from '../../constants/products';

import {Assortment} from '../../types/assortment';

type CoffeeMachineAssortmentProductProps = {
    type: Assortment;
    count: number;
    price: number;
    onClick: (assortmentType: Assortment) => void;
}

export const CoffeeMachineAssortmentProduct: FC<CoffeeMachineAssortmentProductProps> = props => {
    const {
        type,
        count,
        price,
        onClick,
    } = props;

    const handleClick = useCallback(
        () => {
            onClick(type);
        },
        [onClick, type],
    );

    return (
        <p>
            <button
                type={'button'}
                disabled={count < 1}
                onClick={handleClick}
            >
                Купить
            </button>
            &nbsp;
            <strong>
                {productsTitles[type]}
            </strong>
            &nbsp;
            {price} ₽ = {count} порций
        </p>
    );
};

