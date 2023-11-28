"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useThemeContext, updateThemeAppearanceClass } from "@radix-ui/themes";
import { cx } from "class-variance-authority";
import { useTheme } from "next-themes";

import MoonIcon from "~/icons/moon.svg";
import SunIcon from "~/icons/sun.svg";

type Props = {
  theme: "dark" | "light";
  toggleTheme: (theme: "dark" | "light") => void;
} & SwitchPrimitives.SwitchProps;

export const ThemeSwitcher = ({
  className,
  theme,
  toggleTheme,
  ...props
}: Props) => {
  theme = "dark";

  // const a = useThemeContext();
  const t = useTheme()
  const isDark = t.theme === "dark";
console.log('')

  return (
    <div className="p-6 dark:bg-red-900">
      <SwitchPrimitives.Root
        className={cx(
          "relative overflow-hidden",
          "peer h-[35px] w-[65px] shrink-0 cursor-pointer",
          "bg-red-500",
          "inline-flex items-center justify-around",
          "rounded-full border-2 border-gray-300",
          "transition-colors",
          "data-[state=checked]:bg-grey-80"
        )}
        onCheckedChange={(checked) => {
          console.log(checked);
          t.setTheme(checked ? "dark" : "light");
          updateThemeAppearanceClass(checked ? "dark" : "light")
        }}
        checked={isDark}
        {...props}
      >
        <SwitchPrimitives.Thumb
          className={cx(
            "absolute left-0 z-[1]",
            "pointer-events-none block",
            "h-[25px] w-[25px] bg-green-70",
            "rounded-full",
            "shadow-lg ring-0",
            "bg-green-60",
            "transition-transform",
            "data-[state=checked]:translate-x-[33px] data-[state=unchecked]:translate-x-[4px]"
          )}
        />
        <MoonIcon />
        <SunIcon />
      </SwitchPrimitives.Root>
    </div>
  );
};
