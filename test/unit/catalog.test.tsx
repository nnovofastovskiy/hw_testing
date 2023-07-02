import React from 'react';
import { it, describe, expect } from '@jest/globals';

import { render, within, getByText, screen, waitFor } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from '../../src/client/Application'
import { initStore } from '../../src/client/store';
import { ExampleApi, CartApi } from '../../src/client/api';
import { data } from './data';
import { ProductShortInfo } from '../../src/common/types';
import { rest } from 'msw';
// describe('', () => {


it('в каталоге должны отображаться товары, список которых приходит с сервера', async () => {
    // rest.get('http://localhost:3000/hw/store/api/products', (req, res, ctx) => {
    //     return res(ctx.status(200), ctx.json<ProductShortInfo[]>([
    //         { id: 1, name: 'Prod1', price: 100 },
    //         { id: 2, name: 'Prod2', price: 200 },
    //     ]))
    // })

    const basename = data.pages.home;
    const api = new ExampleApi(basename);
    const cart = new CartApi();
    const store = initStore(api, cart);

    // store.dispatch('Add')

    const application = (
        <MemoryRouter initialEntries={['/catalog']}>
            <Provider store={store}>
                <Application />
            </Provider>
        </MemoryRouter>
    );

    const { container } = render(application);
    await waitFor(() => {
        const loadingEl = screen.getByText('LOADING');
        return !loadingEl;
    });
    screen.logTestingPlaygroundURL();
});
// });
