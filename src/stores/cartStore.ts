import { createStore, produce } from "solid-js/store";
import type { Product } from "../types/Product";

type CartStoreItem = {
    product: Product;
    quantity: number;
};

interface CartStoreState {
    items: CartStoreItem[];
}

const [store, setStore] = createStore<CartStoreState>({
    items: [],
});

const cartStore = {
    addItem: (item: CartStoreItem) => {
        setStore(
            "items",
            produce((state) => {
                const added = state.find((v) => v.product.title === item.product.title);
                if (added) added.quantity += item.quantity;
                else state.push(item);
            }),
        );
    },
    getItems: () => store.items,
    removeItem: (index: number) => {
        setStore(
            "items",
            produce((state) => {
                state.splice(index, 1);
            }),
        );
    },
    getTotal: () => {
        return store.items.reduce((x, v) => x + v.product.discount * v.product.price * v.quantity, 0);
    },
    isEmpty: () => store.items.length === 0,
};

export { cartStore, type CartStoreState as CartState, type CartStoreItem };
