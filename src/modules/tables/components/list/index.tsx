'use client';

import { Tables } from '@/redux/reducers/table';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TableCard } from '../card';
import { ContainerClasses, ItemClasses } from './classes';

export const TableList : FC = () => {
    const tables = useSelector(Tables);

    return (
        <div
            className={`${
                ContainerClasses.display
            } ${
                ContainerClasses.flex
            }`}
        >
            {
                tables.map((table, index) => (
                    <div
                        key={`table-card-${index}`}
                        className={`${
                            ItemClasses.padding
                        } ${
                            ItemClasses.width
                        }`}
                    >
                        <TableCard
                            number={index+1}
                            table={table}
                        />
                    </div>
                ))
            }
        </div>
    )
}