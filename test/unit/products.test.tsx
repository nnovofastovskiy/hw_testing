// import React from 'react';
// import { it, describe, expect } from '@jest/globals';

// import { render, within, getByText, screen } from '@testing-library/react';

// import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { Application } from '../../src/client/Application'
// import { initStore } from '../../src/client/store';
// import { ExampleApi, CartApi } from '../../src/client/api';
// import { data } from './data';
// import { ProductShortInfo } from '../../src/common/types';
// // describe('', () => {


// it('в каталоге должны отображаться товары, список которых приходит с сервера', () => {
//     const basename = data.pages.home;
//     const api = new ExampleApi(basename);
//     const cart = new CartApi();
//     const store = initStore(api, cart);
//     const application = (
//         <BrowserRouter basename={basename}>
//             <Provider store={store}>
//                 <Application />
//             </Provider>
//         </BrowserRouter>
//     );
//     api.getProducts = () => (Promise.resolve<ProductShortInfo[]>([
//         {
//             id: 1,
//             name: 'mockProduct',
//             price: 100
//         }
//     ]))

// });
// // });
