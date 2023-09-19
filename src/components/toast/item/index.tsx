'use client';

import { FC, useCallback, useEffect } from "react";
import { ToastItemProps } from "./props";
import { useDispatch } from "react-redux";
import { DeleteToast } from "@/redux/reducers/toast";
import { CardClasses, ToastItemClasses } from "./classes";
import { Card } from "@/components/cards";

export const ToastItem : FC<ToastItemProps> = ({
    id,
    message
}) => {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(DeleteToast(id))
    }, [dispatch, id]);

    useEffect(() => {
        const autoRemove = setTimeout(() => {
            dispatch(DeleteToast(id))
        }, 5000)

        return () => {
            clearTimeout(autoRemove);
        }
    } , []);

    return (
        <div
            className={`${
                ToastItemClasses.cursor
            } ${
                ToastItemClasses.margin
            }`}
            onClick={handleClick}
        >
            <Card
                className={`${
                    CardClasses.background
                } ${
                    CardClasses.border
                } ${
                    CardClasses.color
                } ${
                    CardClasses.shadow
                }`}
                content={message}
            />
        </div>
    )
}