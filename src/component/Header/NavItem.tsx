interface NavItemProps {
  label: string;
}

export const NavItem = (props: NavItemProps) => {
  return (
    <li class="relative">
      <a class="peer focus-v block transition-[color] hover:text-black" href="">
        {props.label}
      </a>
      <div class="absolute right-0 left-0 hidden h-1 bg-orange-500 opacity-0 transition-opacity peer-hover:opacity-100 md:top-[calc(100%+2.25rem)] md:block lg:top-[calc(100%+2.875rem)]"></div>
    </li>
  );
};
