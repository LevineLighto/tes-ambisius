'use client';

import { FC, useCallback } from "react";
import { NavList } from "./list";
import { SolidBtn } from "../buttons";
import { Icon } from "../icon";
import { ContainerClasses, ItemClasses } from "./classes";
import { useDispatch } from "react-redux";
import { ResetMenu } from "@/redux/reducers/menu";
import { ResetTable } from "@/redux/reducers/table";

export const Navigation : FC = () => {
    const dispatch = useDispatch();

    const handleReset = useCallback(() => {
        dispatch(ResetMenu());
        dispatch(ResetTable());
    }, [dispatch])

    return (
        <div 
            className={`${
                ContainerClasses.display
            } ${
                ContainerClasses.flex
            } ${
                ContainerClasses.margin
            } ${
                ContainerClasses.padding
            } ${
                ContainerClasses.width
            }`}
        >
            <nav
                className={`${
                    ItemClasses.flex
                } ${
                    ItemClasses.margin
                }`}
            >
                <NavList
                    hrefs={['/menu', '/meja', '/order', '/dapur', '/kasir']}
                    labels={['Menu', 'Meja', 'Order', 'Dapur', 'Kasir']}
                />
            </nav>
            <SolidBtn
                className={`${
                    ItemClasses.flex
                } ${
                    ItemClasses.margin
                }`}
                onClick={handleReset}
            >
                <Icon
                    icon="restart"
                />
                <span>
                    Reset Aplikasi
                </span>
            </SolidBtn>
        </div>
    )
}