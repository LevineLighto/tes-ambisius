'use client';

import { FC, useCallback } from 'react';
import { MenuRowProps } from './props';
import { useDispatch } from 'react-redux';
import { RemoveMenu } from '@/redux/reducers/menu';
import { CellClasses, DeleteClasses, RowClasses } from './classes';
import { Icon } from '@/components/icon';
import { useToast } from '@/hooks/interactive';

export const MenuRow : FC<MenuRowProps> = ({
    menu
}) => {
    const dispatch  = useDispatch();
    const Toast     = useToast();

    const handleDelete = useCallback(() => {
        dispatch(RemoveMenu(menu.id));
        Toast.create(`Menu ${menu.name} berhasil dihapus`);
    }, [menu, dispatch, Toast]);

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
                { menu.id }
            </td>
            <td
                className={`${
                    CellClasses.align
                } ${
                    CellClasses.padding
                }`}
            >
                { menu.name }
            </td>
            <td
                className={`${
                    CellClasses.align
                } ${
                    CellClasses.padding
                }`}
            >
                <Icon
                    className={`${
                        DeleteClasses.color
                    } ${
                        DeleteClasses.cursor
                    }`}
                    onClick={handleDelete}
                    icon='delete'
                />
            </td>
        </tr>
    )
}