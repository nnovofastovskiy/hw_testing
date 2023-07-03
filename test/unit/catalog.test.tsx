import React from 'react';
import { it, describe, expect } from '@jest/globals';

import { render, within, getByText, screen } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from '../../src/client/Application'
import { initStore } from '../../src/client/store';
import { ExampleApi, CartApi } from '../../src/client/api';
import { data } from './data';
import { CATALOG_STATE, MockExampleApi } from './mockCartApi';

// describe('в магазине должны быть страницы:', () => {


it('в каталоге должны отображаться товары, список которых приходит с сервера', async () => {
    const expectProducts = CATALOG_STATE;
    const basename = data.basename;
    const api = new MockExampleApi(basename);
    const cart = new CartApi();
    const store = initStore(api, cart);
    const application = (
        <MemoryRouter initialEntries={[data.pages.catalog]}>
            <Provider store={store}>
                <Application />
            </Provider>
        </MemoryRouter>
    );
    const { container } = render(application);
    await screen.findByText('MockedProduct1');
    const products = Array.from(container.querySelectorAll('.ProductItem')).map(card => {
        return {
            id: Number(card.getAttribute('data-testid')),
            name: card.querySelector('.ProductItem-Name')?.textContent,
            price: Number(card.querySelector('.ProductItem-Price')?.textContent?.slice(1))
        }
    });

    expect(products).toEqual(expectProducts);
});
// });
