import {Deposit} from '../types/deposit';
import {Denomination, sortedDenomination} from '../types/denomination';

export const convertBalanceToDeposit = (
    balance: number,
    maxDeposit: Deposit
): Deposit => {
    const userDeposit: Deposit = {
        [Denomination.one]: 0,
        [Denomination.two]: 0,
        [Denomination.five]: 0,
        [Denomination.ten]: 0,
    };

    sortedDenomination.forEach(denomination => {
        if (maxDeposit[denomination] < 1) {
            return;
        }

        const coinsCount = Math.floor(balance / Number(denomination));
        if (coinsCount >= 1) {
            userDeposit[denomination] += coinsCount;
            balance -= Number(denomination) * coinsCount;
        }
    });

    return userDeposit;
};
