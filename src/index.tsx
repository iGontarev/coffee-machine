import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {configureAppStore} from './store/configure-app-store';
import {App} from './app';

import {AppState} from './types/app';
import {Assortment} from './types/assortment';
import {Denomination} from './types/denomination';

const initialState: AppState = {
    userDeposit: {
        [Denomination.one]: 10,
        [Denomination.two]: 30,
        [Denomination.five]: 20,
        [Denomination.ten]: 15
    },
    coffeeMachine: {
        acceptor: 0,
        deposit: {
            [Denomination.one]: 100,
            [Denomination.two]: 100,
            [Denomination.five]: 100,
            [Denomination.ten]: 100
        },
        assortment: {
            [Assortment.tea]: {
                price: 13,
                count: 10,
            },
            [Assortment.coffee]: {
                price: 18,
                count: 20,
            },
            [Assortment.whiteCoffee]: {
                price: 21,
                count: 20,
            },
            [Assortment.juice]: {
                price: 35,
                count: 15,
            },
        },
    },
};

const store = configureAppStore(initialState);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
