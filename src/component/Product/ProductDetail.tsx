export const ProductDetail = () => {
  return (
    <div>
      <p class="mb-5 text-[0.8125rem] font-bold tracking-[0.14em] text-orange-500 uppercase">Snecker Company</p>
      <h1 class="mb-4 text-[clamp(1.75rem,0.7958rem+4.0712vw,2.75rem)] leading-[clamp(2rem,1.0458rem+4.0712vw,3rem)] font-bold text-gray-900 lg:mb-[2.1875rem]">
        Fall Limited Edition Sneakers
      </h1>
      <p class="mb-[1.625rem] text-base leading-[1.625rem] text-gray-300">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.
      </p>

      <div class="flex items-center justify-between gap-[0.6875rem] font-bold tracking-[0.04em] sm:flex-col sm:items-start">
        <div class="flex items-center gap-4">
          <strong class="text-[1.75rem] leading-[2.125rem] text-gray-900">$125.00</strong>
          <p class="rounded-md bg-orange-100 pt-[0.3125rem] pr-[0.625rem] pb-[0.375rem] pl-2 text-orange-500">50%</p>
        </div>
        <span class="text-gray-300 line-through">$250.00</span>
      </div>
    </div>
  );
};
