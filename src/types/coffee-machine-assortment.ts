import {Assortment} from './assortment';

export type CoffeeMachineAssortment = {
    price: number;
    count: number;
};

export type CoffeeMachineAssortmentItem = {
    price: CoffeeMachineAssortment['price'];
    count: CoffeeMachineAssortment['count'];
    type: Assortment;
}

export type CoffeeMachineAssortmentState = Record<Assortment, CoffeeMachineAssortment>;
