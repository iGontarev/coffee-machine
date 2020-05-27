import {Assortment} from '../types/assortment';

export const productsTitles: Record<Assortment, string> = {
    [Assortment.tea]: 'Чай',
    [Assortment.coffee]: 'Кофе',
    [Assortment.whiteCoffee]: 'Кофе с молоком',
    [Assortment.juice]: 'Сок',
};
