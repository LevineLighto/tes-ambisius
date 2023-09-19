'use client';

import { FC, FormEventHandler, useCallback, useMemo, useState } from "react";
import { CashierFormProps as Props } from "./props";
import { ButtonClasses, FormClasses, InputClasses } from "./classes";
import { Dropdown } from "@/components/inputs";
import { useSelector } from "react-redux";
import { Tables as TableSelector } from "@/redux/reducers/table";
import { SolidBtn } from "@/components/buttons";
import { Icon } from "@/components/icon";

export const CashierForm : FC<Props> = ({
    onSubmit
}) => {
    const [selected, setSelected] = useState<number>()
    const Tables = useSelector(TableSelector);

    const FilteredTable = useMemo(() => {
        const Indexes : number[]= [-1];
        const Names : string[]  = ['Pilih Meja'];

        Tables.forEach((table, index) => {
            if(!table.orders.length) {
                return;
            }

            Indexes.push(index);
            Names.push(`Meja ${index + 1}`);
        })

        return {
            Indexes,
            Names
        }
    }, [Tables]);

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(event => {
        event.preventDefault();

        if(typeof selected == 'undefined' || selected < 0) {
            return;
        }

        if(typeof onSubmit == 'function') {
            onSubmit(selected);
        }
    }, [selected, onSubmit])

    return (
        <form
            className={`${
                FormClasses.display
            } ${
                FormClasses.flex
            }`}
            onSubmit={handleSubmit}
        >
            <div
                className={`${
                    InputClasses.flex
                } ${
                    InputClasses.margin
                } ${
                    InputClasses.width
                }`}
            >
                <Dropdown
                    label="Meja"
                    labels={FilteredTable.Names}
                    values={FilteredTable.Indexes}
                    value={selected}
                    onChange={setSelected}
                />
            </div>
            <SolidBtn
                className={ButtonClasses.flex}
                type="submit"
                disabled={typeof selected == 'undefined' || selected < 0}
            >
                <Icon
                    icon="print"
                />
                <span>
                    Cetak
                </span>
            </SolidBtn>
        </form>
    )
}