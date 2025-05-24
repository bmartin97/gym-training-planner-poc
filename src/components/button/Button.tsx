import type { JSX, PropsWithChildren } from "react";
import "./Button.css";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["button"]>) => {
  return (
    <button {...props} className={[props.className, "button"].join(" ")}>
      {children}
    </button>
  );
};
