import { For } from "solid-js";
import { cartStore } from "../../stores/cartStore";
import { CartItem } from "./CartItem";

export const CartList = () => {
  return (
    <ul>
      <For each={cartStore.getItems()}>
        {(item, index) => <CartItem item={item} onDeleteClick={() => cartStore.removeItem(index())} />}
      </For>
    </ul>
  );
};
