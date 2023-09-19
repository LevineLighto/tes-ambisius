'use client';

import { Toasts as ToastSelector } from "@/redux/reducers/toast";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ToastContainerClasses as Classes } from "./classes";
import { ToastItem } from "../item";

export const ToastContainer : FC = () => {
    const Toasts = useSelector(ToastSelector);

    return (
        <div
            className={`${
                Classes.padding
            } ${
                Classes.position
            }`}
        >
            {
                Toasts.map((toast, index) => (
                    <ToastItem
                        key={`toast-${index}`}
                        { ...toast }
                    />
                ))
            }
        </div>
    )
}