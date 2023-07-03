import { AxiosResponse } from 'axios';
import { ExampleApi, LOCAL_STORAGE_CART_KEY } from '../../src/client/api';
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../../src/common/types';

export const CATALOG_PRODUCT: Product[] = [
    {
        id: 1,
        name: 'MockedProduct1',
        description: 'MockedProduct1 description',
        price: 100,
        color: 'MockedColor1',
        material: 'MockedMaterial1'
    },
    {
        id: 2,
        name: 'MockedProduct2',
        description: 'MockedProduct2 description',
        price: 200,
        color: 'MockedColor2',
        material: 'MockedMaterial2'
    },
    {
        id: 3,
        name: 'MockedProduct3',
        description: 'MockedProduct3 description',
        price: 300,
        color: 'MockedColor3',
        material: 'MockedMaterial3'
    },
]

export const CATALOG_STATE: ProductShortInfo[] = [
    {
        id: 1,
        name: 'MockedProduct1',
        price: 100
    },
    {
        id: 2,
        name: 'MockedProduct2',
        price: 200
    },
    {
        id: 3,
        name: 'MockedProduct3',
        price: 300
    },
]

export class MockExampleApi extends ExampleApi {
    async getProducts(): Promise<any> {
        return {
            data: CATALOG_STATE,
        }
    }

    async getProductById(id: number): Promise<any> {
        return {
            data: CATALOG_PRODUCT.find((p) => p.id === id)
        }
    }

    async checkout(form: CheckoutFormData, cart: CartState): Promise<any> {
        return {
            data: { id: 0 }
        }
    }
}