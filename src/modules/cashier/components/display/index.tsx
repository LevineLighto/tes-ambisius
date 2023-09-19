'use client';

import { CleanTable, TableOrders } from "@/redux/reducers/table";
import { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionClasses, ActionItemClasses } from "./classes";
import { CashierForm } from "../form";
import { SolidBtn } from "@/components/buttons";
import { Icon } from "@/components/icon";
import { CashierTable } from "../table";
import { useToast } from "@/hooks/interactive";

export const CashierDisplay : FC = () => {
    const [selected, setSelected] = useState<number>();

    const orders    = useSelector(TableOrders(selected));

    const dispatch  = useDispatch();
    const Toast     = useToast();

    const handleClean = useCallback(() => {
        if(!selected) {
            return;
        }

        dispatch(CleanTable(selected))
        
        setSelected(undefined);

        Toast.create('Meja berhasil dibersihkan');
    }, [dispatch, selected, Toast]);

    return (
        <>
            <div 
                className={`${
                    ActionClasses.display
                } ${
                    ActionClasses.flex
                }`}
            >
                <div 
                    className={`${
                        ActionItemClasses.flex
                    } ${
                        ActionItemClasses.margin
                    } ${
                        ActionItemClasses.width
                    }`}
                >
                    <CashierForm
                        onSubmit={setSelected}
                    />
                </div>
                <SolidBtn
                    className={`${
                        ActionItemClasses.flex
                    } ${
                        ActionItemClasses.margin
                    } ${
                        ActionItemClasses.width
                    }`}
                    onClick={handleClean}
                    disabled={typeof selected == 'undefined'}
                >
                    <Icon
                        icon="clean"
                    />
                    <span>
                        Bersihkan Meja
                    </span>
                </SolidBtn>
            </div>
            <CashierTable
                orders={orders}
            />
        </>
    )
}