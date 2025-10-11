import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { cn } from "../../utils/cn";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const [localProps, restProps] = splitProps(props, ["children", "class"]);

  return (
    <button
      class={cn(
        "flex h-14 w-full items-center justify-center rounded-[0.625rem] bg-orange-500 font-bold text-white transition-[scale,opacity] hover:opacity-70 active:scale-[0.98]",
        localProps.class,
      )}
      {...restProps}
    >
      {localProps.children}
    </button>
  );
};
