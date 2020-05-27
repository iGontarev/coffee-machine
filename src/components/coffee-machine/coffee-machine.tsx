import React, {FC} from 'react';

export const CoffeeMachine: FC = ({children}) => {
    return (
        <fieldset>
            <legend>Кофемашина</legend>
            {children}
        </fieldset>
    );
};
