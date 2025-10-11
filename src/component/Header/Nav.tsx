import { createEffect, createSignal, onMount } from "solid-js";
import { CloseIcon, MenuIcon } from "../../assets/images";
import { cn } from "../../utils/cn";
import { NavList } from "./NavList";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const handleMenuButtonClick = () => {
    setMenuOpen((v) => !v);
  };

  const showingTabletViewport = () => window.matchMedia("(min-width:48em)").matches;

  window.addEventListener("resize", () => {
    if (showingTabletViewport()) setMenuOpen(false);
  });

  const handleMenuBackdropClick = (e: Event) => {
    e.stopPropagation();
    setMenuOpen(false);
  };

  const handleMenuBackgroundClick = (e: Event) => {
    e.stopPropagation();
  };

  const handleMenuBackgroundKeydown = (e: KeyboardEvent) => {
    if (menuOpen() && !e.shiftKey && e.key === "Escape") {
      setMenuOpen(false);
    }
  };

  let menu: HTMLDivElement | undefined;

  onMount(() => {
    if (!menu) return;

    const focusableElements = menu.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;

    focusableElements[0].addEventListener("keydown", (e) => {
      if (e.shiftKey && e.key === "Tab" && menuOpen()) {
        requestAnimationFrame(() => {
          focusableElements[focusableElements.length - 1].focus();
        });
      }
    });

    focusableElements[focusableElements.length - 1].addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Tab" && menuOpen()) {
        requestAnimationFrame(() => {
          focusableElements[0].focus();
        });
      }
    });

    createEffect(() => {
      if (menuOpen()) {
        setTimeout(() => {
          focusableElements[0].focus();
        }, 30);
      }
    });
  });

  createEffect(() => {
    if (menuOpen()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  return (
    <nav>
      <button
        class="relative z-50 flex aspect-square w-6 items-center justify-center rounded-sm md:hidden"
        type="button"
        aria-expanded={menuOpen()}
        aria-controls="mobile-menu"
        onClick={handleMenuButtonClick}
      >
        <img class={cn("block", menuOpen() && "hidden")} src={MenuIcon} alt="" />
        <img class={cn("hidden", menuOpen() && "block")} src={CloseIcon} alt="" />
      </button>
      <div
        class={cn(
          "absolute inset-0 z-20 hidden [background:rgba(0,0,0,0.75)]",
          menuOpen() && "block",
          "md:static md:block md:[background:initial]",
        )}
        id="mobile-menu"
        ref={menu}
        onclick={handleMenuBackdropClick}
      >
        <NavList onClick={handleMenuBackgroundClick} onKeydown={handleMenuBackgroundKeydown} />
      </div>
    </nav>
  );
};
