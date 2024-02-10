import { MouseEventHandler } from "react";

export interface IButtonProps {
  title: string;
  designs?: string;
  isDisabled?: boolean;
  btnType?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rIcon?: string;
}
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "awd" | "4wd" | "rwd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};

export type OptionType = {
  label: string;
  value: string;
};
