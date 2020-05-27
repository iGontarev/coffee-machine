import {useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';

import {AppState} from '../types/app';
import {Money} from '../types/money';
import {Denomination} from '../types/denomination';
import {Deposit} from '../types/deposit';

export const useDepositList = (
    selector: (appState: AppState) => Deposit
): Money[] => {
    const depositMap = useSelector(
        selector,
        shallowEqual,
    )

    const depositList: Money[] = useMemo(
        () => Object.keys(depositMap).map(denomination => ({
            denomination: denomination as Denomination,
            count: depositMap[denomination as Denomination],
        })),
        [depositMap],
    );

    return depositList;
};



