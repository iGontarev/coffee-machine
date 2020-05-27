import React, {FC} from 'react';

import {CoffeeMachineAssortmentProduct} from './coffee-machine-assortment-product';

import {CoffeeMachineAssortmentItem} from '../../types/coffee-machine-assortment';
import {Assortment} from '../../types/assortment';

type CoffeeMachineAssortmentProps = {
    assortment: CoffeeMachineAssortmentItem[];
    onBuy: (assortmentType: Assortment) => void;
}

export const CoffeeMachineAssortment: FC<CoffeeMachineAssortmentProps> = ({assortment, onBuy}) => {
    return (
        <fieldset>
            <legend>Ассортимент</legend>
            {assortment.map(({count, price, type}) => (
                <CoffeeMachineAssortmentProduct
                    key={type}
                    type={type}
                    price={price}
                    count={count}
                    onClick={onBuy}
                />
            ))}
        </fieldset>
    );
};
