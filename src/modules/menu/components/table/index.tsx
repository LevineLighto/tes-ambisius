'use client';

import { FC } from 'react';
import { ContainerClasses, TableClasses, TheadClasses } from './classes';
import { useSelector } from 'react-redux';
import { Menu } from '@/redux/reducers/menu';
import { MenuRow } from '../table-row';

export const MenuTable : FC = () => {
    const menu = useSelector(Menu);

    return (
        <div
            className={`${
                ContainerClasses.overflow
            } ${
                ContainerClasses.width
            }`}
        >
            <table
                className={`${
                    TableClasses.layout
                } ${
                    TableClasses.width
                }`}
            >
                <thead
                    className={`${
                        TheadClasses.border
                    } ${
                        TheadClasses.size
                    }`}
                >
                    <tr>
                        <th
                            className={`${
                                TheadClasses.align
                            } ${
                                TheadClasses.padding
                            } ${
                                TheadClasses.weight
                            }`}
                        >
                            ID
                        </th>
                        <th
                            className={`${
                                TheadClasses.align
                            } ${
                                TheadClasses.padding
                            } ${
                                TheadClasses.weight
                            }`}
                        >
                            Menu
                        </th>
                        <th
                            className={`${
                                TheadClasses.align
                            } ${
                                TheadClasses.padding
                            } ${
                                TheadClasses.weight
                            }`}
                        >
                            Hapus
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map((item, index) => (
                            <MenuRow
                                key={`menu-item-${index}`}
                                menu={item}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}