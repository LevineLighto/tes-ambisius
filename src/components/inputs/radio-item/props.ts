import { MouseEventHandler } from "react";

export interface RadioItemProps {
    label       : string,
    onClick?    : MouseEventHandler<HTMLDivElement>,
    selected?   : boolean,
}