import { AvatarImage, SiteLogo } from "../../assets/images";
import { Nav } from "./Nav";

export const Header = () => {
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
    </header>
  );
};
