'use client';

import { FC } from 'react';
import { OrderItemProps as Props } from './props';
import { useSelector } from 'react-redux';
import { MenuItem } from '@/redux/reducers/menu';
import { OrderItemClasses as Classes, CounterClasses, DetailClasses } from './classes';

export const OrderItem : FC<Props> = ({
    amount,
    id,
}) => {
    const Menu = useSelector(MenuItem(id));

    if(!Menu) {
        return (
            <></>
        )
    }

    return (
        <div
            className={`${
                Classes.display
            } ${
                Classes.flex
            } ${
                Classes.margin
            }`}
        >
            <span
                className={DetailClasses.flex}
            >
                { Menu.name }
            </span>
            <span
                className={`${
                    CounterClasses.align
                } ${
                    CounterClasses.weight
                } ${
                    DetailClasses.flex
                }`}
            >
                { amount }
            </span>
        </div>
    )
}