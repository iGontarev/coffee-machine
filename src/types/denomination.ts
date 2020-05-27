export enum Denomination {
    one = '1',
    two = '2',
    five = '5',
    ten = '10',
}

export const sortedDenomination: Denomination[] = Object
    .values(Denomination)
    .sort((a, b) => Number(b) - Number(a))
    .map(denomination => denomination as Denomination);
