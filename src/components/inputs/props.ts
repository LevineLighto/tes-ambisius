import { ComponentPropsWithoutRef, ElementType } from "react";

export type BaseInputProps <T extends ElementType = 'input'> =
    Omit<ComponentPropsWithoutRef<T>, 'onChange'> & {
        onChange?   : (value: any) => any,
        label?      : string,
    }