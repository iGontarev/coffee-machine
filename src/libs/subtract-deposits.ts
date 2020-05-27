import {Deposit} from '../types/deposit';
import {Denomination} from '../types/denomination';

export const subtractDeposits = (leftDeposit: Deposit, rightDeposit: Deposit): Deposit => {
    return Object.keys(rightDeposit).reduce(
        (newState, denomination) => {
            newState[denomination as Denomination] -= rightDeposit[denomination as Denomination];
            return newState;
        },
        {...leftDeposit},
    );
};

