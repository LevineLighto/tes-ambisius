import { ReactNode } from "react";

export interface ModalProps {
    id      : string,
    title?  : string,
    content?: ReactNode,
    visible?: boolean
}