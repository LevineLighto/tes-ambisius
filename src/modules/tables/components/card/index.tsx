import { Card } from '@/components/cards';
import { FC } from 'react';
import { TableCardClasses as Classes, CounterClasses, CustomerClasses } from './classes';
import { TableCardProps as Props } from './props';
import { OrderList } from '@/order/components';

export const TableCard : FC<Props> = ({
    number,
    table
}) => (
    <Card
        className={`${
            Classes.background[!table.customers ? 'empty' : 'occupied']
        }`}
        title={<>Meja {number}</>}
        content={(
            <>
                <div 
                    className={CustomerClasses.margin}
                >
                    <span>Jumlah customer:{' '}</span>
                    <span
                        className={CounterClasses.weight}
                    >
                        { table.customers }
                    </span>
                </div>
                <OrderList
                    orders={table.orders}
                />
            </>
        )}
    />
)