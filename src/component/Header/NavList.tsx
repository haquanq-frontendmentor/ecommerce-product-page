import { NavItem } from "./NavItem";

interface NavListProps {
  onClick: (e: Event) => void;
  onKeydown: (e: KeyboardEvent) => void;
}

export const NavList = (props: NavListProps) => {
  return (
    <ul
      class="flex h-full w-[15.625rem] flex-col items-start gap-7 bg-white pt-[5.8125rem] pl-6 text-lg leading-[1.125rem] font-bold text-black md:w-auto md:flex-row md:p-0 md:text-[0.9375rem] md:font-normal md:text-gray-300 lg:gap-8"
      onClick={props.onClick}
      onKeyDown={props.onKeydown}
    >
      <NavItem label="Collections" />
      <NavItem label="Men" />
      <NavItem label="Women" />
      <NavItem label="About" />
      <NavItem label="Contact" />
    </ul>
  );
};
