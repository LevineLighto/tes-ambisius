import { FC } from 'react';
import { OrderListProps as Props } from './props';
import { ListClasses, TitleClasses } from './classes';
import { OrderItem } from '../item';

export const OrderList : FC<Props> = ({
    orders
}) => (
    <>
        <h3 
            className={`${
                TitleClasses.margin
            } ${
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
            { 
                orders.map((order, index) => (
                    <OrderItem
                        key={`order-item-${index}`}
                        amount={order.amount}
                        id={order.id}
                    />
                ))
            }
        </ul>
    </>
)