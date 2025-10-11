import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { AvatarImage, SiteLogo } from "../../assets/images";
import { cartStore } from "../../stores/cartStore";
import { Cart } from "../Cart/Cart";
import { Nav } from "./Nav";

export const Header = () => {
  const [cartOpen, setCartOpen] = createSignal(false);

  const handleCartButtonClick = (e: Event) => {
    e.stopPropagation();
    setCartOpen((v) => !v);
  };

  let cartButton: HTMLButtonElement | undefined;

  window.addEventListener("click", () => {
    setCartOpen(false);
  });

  return (
    <header>
      <div class="mx-auto w-[min(100vw-3rem,69.375rem)]">
        <div class="py-6 md:border-b md:border-gray-300 lg:pt-7 lg:pb-[2.125rem]">
          <div class="flex justify-between">
            <div class="flex flex-row-reverse items-center gap-4 md:flex-row md:gap-10 lg:gap-14">
              <a href="" aria-label="Homepage">
                <img src={SiteLogo} alt="" />
              </a>
              <Nav />
            </div>
            <div class="flex items-center gap-[clamp(1.3125rem,-0.1188rem+6.1069vw,2.8125rem)]">
              <button
                class="relative flex aspect-square w-6 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-black active:scale-[0.97] sm:w-8"
                type="button"
                aria-label="My cart"
                on:click={handleCartButtonClick}
                ref={cartButton}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  />
                </svg>
                <Show when={!cartStore.isEmpty()}>
                  <span class="absolute top-[-0.25rem] right-[-0.375rem] rounded-full bg-orange-500 py-[0.125rem] pr-[0.4375rem] pl-[0.375rem] text-[0.625rem] font-bold text-white sm:top-[-0.0625rem] sm:right-[-0.125rem]">
                    {cartStore.getItems().length}
                  </span>
                </Show>
              </button>
              <Portal mount={document.body}>
                <Show when={cartOpen()}>
                  <Cart trigger={cartButton} />
                </Show>
              </Portal>
              <button
                class="aspect-square w-[clamp(1.5rem,-0.0506rem+6.6158vw,3.125rem)] rounded-full"
                type="button"
                aria-label="User menu"
              >
                <img
                  class="rounded-full outline-2 -outline-offset-2 outline-transparent transition-colors hover:outline-orange-500"
                  src={AvatarImage}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
