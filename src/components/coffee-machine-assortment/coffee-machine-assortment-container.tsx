import React, {FC, useCallback, useMemo} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {subBalance} from '../../state-slices/coffee-machine-acceptor';
import {CoffeeMachineAssortment} from './coffee-machine-assortment';
import {productsTitles} from '../../constants/products';

import {AppState} from '../../types/app';
import {CoffeeMachineAssortmentItem} from '../../types/coffee-machine-assortment';
import {Assortment} from '../../types/assortment';

export const CoffeeMachineAssortmentContainer: FC = () => {
    const dispatch = useDispatch();

    const balance = useSelector(
        ({coffeeMachine}: AppState) => coffeeMachine.acceptor,
        shallowEqual,
    );

    const assortmentMap = useSelector(
        ({coffeeMachine}: AppState) => coffeeMachine.assortment,
        shallowEqual,
    );

    const assortmentList: CoffeeMachineAssortmentItem[] = useMemo(
        () => Object.keys(assortmentMap).map(assortmentType => ({
            ...assortmentMap[assortmentType as Assortment],
            type: assortmentType as Assortment,
        })),
        [assortmentMap],
    );

    const handleBuy = useCallback(
        (assortmentType: Assortment) => {
            // @TODO показываем нотиф или попап, в данном случае обойдемся алертом
            const productPrice = assortmentMap[assortmentType].price;
            if (productPrice <= balance) {
                dispatch(subBalance(productPrice))
                alert(`Спасибо! Вами приобретён ${productsTitles[assortmentType]}`);
            } else {
                alert(`Недостаточно средств: ${productPrice - balance} ₽`);
            }
        },
        [assortmentMap, balance, dispatch],
    )

    return (
        <CoffeeMachineAssortment
            assortment={assortmentList}
            onBuy={handleBuy}
        />
    );
};
