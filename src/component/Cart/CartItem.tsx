import { type CartStoreItem } from "../../stores/cartStore";
import { formatPrice } from "../../utils/formatPrice";

interface CartItemProps {
  item: CartStoreItem;
  onDeleteClick: () => void;
}

export const CartItem = ({ item, onDeleteClick }: CartItemProps) => {
  const discountedPrice = () => item.product.price * item.product.discount;
  const totalPrice = () => discountedPrice() * item.quantity;

  return (
    <li class="flex items-center justify-between gap-3">
      <img class="w-[3.125rem] rounded-sm" src={item.product.thumbnail} alt="" />
      <div class="flex grow flex-col gap-[0.625rem] text-gray-300">
        <p>{item.product.title}</p>
        <p class="tracking-[0.03em]">
          <span class="text-gray-300">{`${formatPrice(discountedPrice())} x ${item.quantity} `}</span>
          <span class="font-bold text-gray-900">{formatPrice(totalPrice())}</span>
        </p>
      </div>
      <button
        class="flex aspect-square w-6 items-center justify-center rounded-sm text-gray-300 transition-colors hover:bg-orange-500 hover:text-white"
        type="button"
        on:click={onDeleteClick}
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trash2-icon lucide-trash-2"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </li>
  );
};
