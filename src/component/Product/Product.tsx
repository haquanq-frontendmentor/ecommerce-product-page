import { ProductAction } from "./ProductAction";
import { ProductDetail } from "./ProductDetail";
import { ProductPicture } from "./ProductPicuture";

export const Product = () => {
  return (
    <section class="mx-auto flex max-w-[69.375rem] flex-col items-center justify-center pb-16 *:max-w-160 md:px-12 md:pt-16 lg:flex-row lg:items-start lg:justify-between lg:pt-[5.625rem] lg:pb-33 lg:*:max-w-[27.8125rem]">
      <div>
        <ProductPicture />
      </div>
      <div class="mx-6 flex flex-col gap-6 py-6 sm:pt-16 lg:m-0 lg:gap-[2.4375rem]">
        <ProductDetail />
        <ProductAction />
      </div>
    </section>
  );
};
