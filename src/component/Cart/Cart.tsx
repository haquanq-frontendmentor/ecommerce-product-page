import { onMount, Show } from "solid-js";
import { cartStore } from "../../stores/cartStore";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../common/Button";
import { CartList } from "./CartList";

interface CartProps {
  trigger: HTMLElement | undefined;
}

export const Cart = ({ trigger }: CartProps) => {
  let modal: HTMLElement | undefined;

  onMount(() => {
    if (!modal || !trigger) return;

    const focusableElements = modal.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
    let first = focusableElements[0];
    let last = focusableElements[focusableElements.length - 1];

    first = modal as HTMLButtonElement;
    last = modal as HTMLButtonElement;

    first.addEventListener("keydown", (e) => {
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        last.focus();
      }
    });

    last.addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        first.focus();
      }
    });

    first.focus();

    const positionModal = () => {
      const rect = trigger.getBoundingClientRect();
      const cx = rect.x + rect.width / 2;
      const top = rect.bottom + 32;
      let right = Math.max(document.body.clientWidth - cx - modal.clientWidth / 2, 16);
      modal.style.top = `${top}px`;
      modal.style.right = `${right}px`;
    };

    positionModal();

    modal.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    modal.addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Escape") {
        trigger.click();
      }
    });

    const handleWindowResize = () => {
      positionModal();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <section
      class="fixed z-50 w-[min(100vw-2rem,22.5rem)] rounded-[0.625rem] bg-white shadow-2xl"
      aria-modal="true"
      role="dialog"
      aria-labelledby="cart-modal-label"
      aria-describedby="cart-modal-description"
      ref={modal}
      tabindex={-1}
    >
      <div class="border-b border-gray-200 p-6">
        <h2 class="text-base leading-5 font-bold text-gray-900" id="cart-modal-label">
          Cart
        </h2>
      </div>
      <Show
        when={!cartStore.isEmpty()}
        fallback={
          <div class="flex h-47 items-center justify-center p-6">
            <p class="text-center text-base font-bold text-gray-300" id="cart-modal-description">
              Your cart is empty.
            </p>
          </div>
        }
      >
        <div class="flex flex-col gap-6 p-6">
          <CartList />
          <div class="flex items-center justify-between border-t border-gray-200 pt-4">
            <p class="text-gray-300">Total: </p>
            <p class="text-lg font-bold text-gray-900">{`${formatPrice(cartStore.getTotal())}`}</p>
          </div>
          <Button type="button">Check out</Button>
        </div>
      </Show>
    </section>
  );
};
