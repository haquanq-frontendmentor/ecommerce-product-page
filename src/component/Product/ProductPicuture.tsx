import createEmblaCarousel from "embla-carousel-solid";
import { createSignal, For, onMount } from "solid-js";
import {
  NextIcon,
  PrevIcon,
  ProductImage1,
  ProductImage1Thumbnail,
  ProductImage2,
  ProductImage2Thumbnail,
  ProductImage3,
  ProductImage3Thumbnail,
  ProductImage4,
  ProductImage4Thumbnail,
} from "../../assets/images";
import { cn } from "../../utils/cn";

export const ProductPicture = () => {
  const pictures = [
    { image: ProductImage1, thumbnail: ProductImage1Thumbnail },
    { image: ProductImage2, thumbnail: ProductImage2Thumbnail },
    { image: ProductImage3, thumbnail: ProductImage3Thumbnail },
    { image: ProductImage4, thumbnail: ProductImage4Thumbnail },
  ];

  const [selectedIndex, setSelectedIndex] = createSignal(0);
  const [emblaRef, emblaApi] = createEmblaCarousel(() => ({ loop: true }));

  const handlePrevClick = () => {
    emblaApi()?.scrollPrev();
  };

  const handleNextClick = () => {
    emblaApi()?.scrollNext();
  };

  const handleThumbnailClick = (index: number) => {
    emblaApi()?.scrollTo(index);
  };

  onMount(() => {
    emblaApi()?.on("select", (x) => {
      setSelectedIndex(x.selectedScrollSnap());
    });
  });

  return (
    <div class="relative">
      <p
        class="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >{`Showing image ${selectedIndex() + 1} of ${pictures.length}`}</p>
      <div class="overflow-hidden sm:rounded-2xl" ref={emblaRef}>
        <ul class="embla__container flex">
          <For each={pictures}>
            {(item) => (
              <li class="embla__slide flex-[0_0_100%]">
                <img class="" src={item.image} alt="" />
              </li>
            )}
          </For>
        </ul>
      </div>
      <ul class="hidden justify-between pt-8 lg:flex">
        <For each={pictures}>
          {(item, index) => (
            <li class="relative aspect-square max-w-22 rounded-[0.625rem]">
              <button
                class="rounded-[inherit] transition-opacity hover:opacity-50"
                type="button"
                onClick={() => handleThumbnailClick(index())}
                aria-label={`Show image ${index() + 1} of ${pictures.length}`}
              >
                <img
                  class={cn("rounded-[inherit] transition-opacity", selectedIndex() === index() && "opacity-40")}
                  src={item.thumbnail}
                  alt=""
                />
              </button>
              <div
                class={cn(
                  "pointer-events-none absolute inset-0 rounded-[inherit] outline-2 outline-transparent transition-colors",
                  selectedIndex() === index() && "outline-orange-500",
                )}
              ></div>
            </li>
          )}
        </For>
      </ul>
      <div class="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between *:flex *:aspect-square *:w-10 *:items-center *:justify-center *:rounded-full *:bg-white md:*:w-12 lg:hidden">
        <button class="pr-1 focus-visible:outline-white" type="button" onclick={handlePrevClick}>
          <img src={PrevIcon} alt="" />
        </button>
        <button class="pl-1 focus-visible:outline-white" type="button" onclick={handleNextClick}>
          <img src={NextIcon} alt="" />
        </button>
      </div>
    </div>
  );
};
