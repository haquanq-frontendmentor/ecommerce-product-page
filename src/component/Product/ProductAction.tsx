import { createSignal } from "solid-js";
import { MinusIcon, PlusIcon, ProductImage1Thumbnail } from "../../assets/images";
import { cartStore } from "../../stores/cartStore";
import { Button } from "../common/Button";

export const ProductAction = () => {
  const iconButtonClass =
    "h-14 aspect-square focus-visible:inset-ring-orange-500 focus-visible:outline-none items-center justify-center active:scale-95 flex rounded-[inherit] inset-ring-2 inset-ring-transparent hover:inset-ring-orange-500 transition-[box-shadow,scale]";

  const [quantity, setQuantity] = createSignal(0);

  const handleIncreseQuantityClick = () => {
    setQuantity((v) => v + 1);
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((v) => Math.max(v - 1, 0));
  };

  const handleAddCartClick = () => {
    cartStore.addItem({
      product: {
        title: "Fall Limited Edition Sneakers",
        description: "",
        price: 250,
        discount: 0.5,
        image: "",
        thumbnail: ProductImage1Thumbnail,
      },
      quantity: quantity(),
    });
  };
  return (
    <div class="flex flex-col gap-4 sm:flex-row">
      <div class="flex min-w-1/3 items-center justify-between rounded-[0.625rem] bg-gray-100 lg:min-w-[9.8125rem]">
        <button
          class={iconButtonClass}
          type="button"
          aria-label="Decrease quantity"
          onClick={handleDecreaseQuantityClick}
        >
          <img src={MinusIcon} alt="" />
        </button>
        <span class="font-bold text-gray-900">{quantity()}</span>
        <button
          class={iconButtonClass}
          type="button"
          aria-label="Increase quantity"
          onClick={handleIncreseQuantityClick}
        >
          <img src={PlusIcon} alt="" />
        </button>
      </div>
      <Button type="button" onClick={handleAddCartClick}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="currentColor"
            fill-rule="nonzero"
          />
        </svg>
        <span>Add to cart</span>
      </Button>
    </div>
  );
};
