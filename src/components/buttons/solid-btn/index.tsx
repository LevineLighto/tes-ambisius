import { FC } from "react";
import { SolidBtnClasses as Classes } from "./classes";
import { SolidBtnProps as Props } from "./props";

export const SolidBtn : FC<Props> = ({
    className,
    ...props
}) => (
    <button
        className={`${
            Classes.background
        } ${
            Classes.border
        } ${
            Classes.color
        } ${
            Classes.cursor
        } ${
            Classes.padding
        } ${
            Classes.radius
        } ${
            className
        }`}
        { ...props }
    />
)