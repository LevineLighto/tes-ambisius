'use client';

import { FC, FormEventHandler, useCallback, useMemo, useState } from "react";
import { AddInputClasses, FormClasses, RadioClasses, SubmitClasses } from "./classes";
import { Radio } from "@/components/inputs";
import { useDispatch, useSelector } from "react-redux";
import { Order, Tables } from "@/redux/reducers/table";
import { Order as OrderType } from "@/redux/reducers/table/types";
import { OrderInput } from "../input";
import { SolidBtn } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { useToast } from "@/hooks/interactive";

export const OrderForm : FC = () => {
    const [table, setTable]     = useState<number>();
    const [orders, setOrders]   = useState<OrderType[]>([]);

    const Table = useSelector(Tables);

    const dispatch  = useDispatch();
    const Toast     = useToast();

    const OccupiedTables = useMemo(() => {
        const Labels : string[] = [];
        const Indexes : number[]= [];

        Table.forEach((table, index) => {
            if(!table.customers) {
                return;
            }

            Labels.push(`Meja ${index + 1}`);
            Indexes.push(index);
        })

        return {
            Labels,
            Indexes
        }
    }, [Table])

    const handleAddOrder = useCallback(() => {
        const modified = [ ...orders ];
        modified.push({
            id      : '',
            amount  : 0,
        });

        setOrders(modified);
    }, [orders]);

    const handleChangeOrder = useCallback((index: number) => {
        return (value : OrderType) => {
            const modified = [ ...orders ];
            modified[index]= value;

            setOrders(modified);
        }
    }, [orders]);

    const handleRemoveOrder = useCallback((index : number) => {
        return () => {
            const modified = [ ...orders ];
            modified.splice(index, 1);

            setOrders(modified);
        }
    }, [orders]);

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(event => {
        event.preventDefault();

        if(typeof table == 'undefined' || !orders.length) {
            return;
        }

        dispatch(Order({
            table: table,
            orders: orders
        }));

        Toast.create('Pesanan berhasil dikirimkan ke dapur')

        setTable(undefined);
        setOrders([]);
    }, [table, orders, dispatch, Toast])

    return (
        <form
            className={FormClasses.margin}
            onSubmit={handleSubmit}
        >
            <div 
                className={RadioClasses.margin}
            >
                <Radio
                    label="Pilih Meja"
                    labels={OccupiedTables.Labels}
                    values={OccupiedTables.Indexes}
                    value={table}
                    onChange={setTable}
                />
            </div>
            {
                orders.map((order, index) => (
                    <OrderInput
                        key={`order-input-${index}`}
                        value={order}
                        onChange={handleChangeOrder(index)}
                        onDelete={handleRemoveOrder(index)}
                    />
                ))
            }
            <SolidBtn
                className={`${
                    AddInputClasses.align
                } ${
                    AddInputClasses.display
                } ${
                    AddInputClasses.margin
                } ${
                    AddInputClasses.width
                }`}
                type="button"
                onClick={handleAddOrder}
            >
                <Icon
                    icon="add"
                />
                <span>
                    Tambah Item Pesanan
                </span>
            </SolidBtn>
            <div 
                className={SubmitClasses.align}
            >
                <SolidBtn
                    type="submit"
                    disabled={typeof table == 'undefined' || !orders.length}
                >
                    <Icon
                        icon="send"
                    />
                    <span>
                        Kirim Pesanan ke Dapur
                    </span>
                </SolidBtn>
            </div>
        </form>
    )
}