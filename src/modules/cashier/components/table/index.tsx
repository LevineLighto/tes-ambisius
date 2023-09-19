import { FC } from "react";
import { CashierTableProps } from "./props";
import { ContainerClasses, TableClasses, ThanksClasses, TheadClasses } from "./classes";
import { CashierRow } from "../table-row";

export const CashierTable : FC<CashierTableProps> = ({
    orders
}) => {
    if(!orders.length) {
        return <></>
    }

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
                    TableClasses.margin
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
                            Jumlah
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
                            Harga
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((item, index) => (
                            <CashierRow
                                key={`order-item-${index}`}
                                order={item}
                            />
                        ))
                    }
                </tbody>
            </table>
            <div
                className={`${
                    ThanksClasses.align
                } ${
                    ThanksClasses.color
                } ${
                    ThanksClasses.size
                } ${
                    ThanksClasses.weight
                }`}
            >
                Terima kasih sudah makan di Restoran Vercel
            </div>
        </div>
    )
}