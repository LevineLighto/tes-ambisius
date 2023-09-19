'use client';

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { OrderInputProps as Props } from "./props";
import { AmountClasses, ContainerClasses, DeleteClasses, MenuClasses } from "./classes";
import { Dropdown, Input } from "@/components/inputs";
import { useSelector } from "react-redux";
import { Menu as MenuSelector } from "@/redux/reducers/menu";
import { Icon } from "@/components/icon";

export const OrderInput : FC<Props> = ({
    onChange,
    onDelete,
    value,
}) => {
    const [val, setVal] = useState(value || {id: '', amount: 0});

    const Menu = useSelector(MenuSelector);

    const MenuOptions = useMemo(() => {
        const IDs : string[]    = [''];
        const Names : string[]  = ['Pilih Menu'];

        Menu.forEach(item => {
            IDs.push(item.id);
            Names.push(item.name);
        });

        return {
            IDs,
            Names
        }
    }, [Menu]);

    const handleChange = useCallback((name : keyof typeof val) => {
        return (changed : any) => {
            const modified = { ...val };

            (modified[name] as any) = changed;

            setVal(modified);

            if(typeof onChange == 'function') {
                onChange(modified);
            }
        }
    }, [onChange, val])

    useEffect(() => {
        if(typeof value == 'undefined') {
            return;
        }
        setVal(value);
    }, [value])

    return (
        <div
            className={`${
                ContainerClasses.display
            } ${
                ContainerClasses.flex
            }`}
        >
            <div
                className={`${
                    MenuClasses.flex
                } ${
                    MenuClasses.margin
                } ${
                    MenuClasses.width
                }`}
            >
                <Dropdown
                    name="selected-menu"
                    values={MenuOptions.IDs}
                    labels={MenuOptions.Names}
                    label="Menu"
                    onChange={handleChange('id')}
                    value={val.id}
                />
            </div>
            <div
                className={`${
                    AmountClasses.flex
                } ${
                    AmountClasses.margin
                } ${
                    AmountClasses.width
                }`}
            >
                <Input
                    name="amount"
                    type="number"
                    label="Jumlah"
                    onChange={handleChange('amount')}
                    value={val.amount}
                />
            </div>
            <div
                className={`${
                    DeleteClasses.color
                } ${
                    DeleteClasses.flex
                } ${
                    DeleteClasses.margin
                } ${
                    DeleteClasses.padding
                }`}
                onClick={onDelete}
            >
                <Icon
                    icon="delete"
                />
            </div>
        </div>
    )
}