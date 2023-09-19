'use client';

import { FC } from 'react';
import { CellClasses, RowClasses } from './classes';
import { CashierRowProps } from './props';
import { useSelector } from 'react-redux';
import { MenuItem } from '@/redux/reducers/menu';

export const CashierRow : FC<CashierRowProps> = ({
    order
}) => {
    const Menu = useSelector(MenuItem(order.id));

    if(!Menu) {
        return <></>
    }

    return (
        <tr
            className={RowClasses.border}
        >
            <td
                className={`${
                    CellClasses.align
                } ${
                    CellClasses.padding
                }`}
            >
                { order.amount }
            </td>
            <td
                className={`${
                    CellClasses.align
                } ${
                    CellClasses.padding
                }`}
            >
                { Menu.name }
            </td>
            <td
                className={`${
                    CellClasses.align
                } ${
                    CellClasses.padding
                }`}
            >
                Gratis
            </td>
        </tr>
    )
}