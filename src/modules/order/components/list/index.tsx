'use client';

import { FC, useMemo } from 'react';
import { OrderListProps as Props } from './props';
import { ListClasses, TitleClasses } from './classes';
import { OrderItem } from '../item';

export const OrderList : FC<Props> = ({
    orders
}) => {
    const counted = useMemo(() => {
        const output : any = {};
        orders.forEach(order => {
            output[order] = (output[order]||0) + 1;
        });

        return output;
    }, [orders]);
    
    return (
        <>
            <h3 
                className={`${
                    TitleClasses.size
                } ${
                    TitleClasses.weight
                }`}
            >
                Daftar Pesanan
            </h3>
            <ul
                className={ListClasses.padding}
            >
                { Object.keys(counted).map((id, index) => (
                    <OrderItem
                        key={`order-item-${index}`}
                        amount={counted[id]}
                        id={id}
                    />
                )) }
            </ul>
        </>
    )
}