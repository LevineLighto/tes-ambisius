'use client';

import { Tables, UseTable } from '@/redux/reducers/table';
import { 
    FC, 
    FormEventHandler,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    ButtonClasses,
    TableFormClasses as FormClasses, 
    InputClasses
} from './classes';
import { Dropdown, Input } from '@/components/inputs';
import { SolidBtn } from '@/components/buttons';
import { Icon } from '@/components/icon';

export const TableForm : FC = () => {
    const [table, setTable]     = useState<number>();
    const [amount, setAmount]   = useState<number>(0);

    const dispatch  = useDispatch();
    const tables    = useSelector(Tables);

    const EmptyTables = useMemo(() => {
        const empty : number[] = [];

        tables.forEach((table, index) => {
            if(table.customers) {
                return;
            }

            empty.push(index);
        });

        return empty;
    }, [tables]);


    const handleAssign = useCallback<FormEventHandler<HTMLFormElement>>(event => {
        event.preventDefault();

        if(!table || !amount) {
            return;
        }

        dispatch(UseTable({
            number      : table,
            customers   : amount
        }));

        setTable(undefined);
        setAmount(0);
    }, [table, amount, UseTable, dispatch]);

    return (
        <form
            className={`${
                FormClasses.display
            } ${
                FormClasses.flex
            } ${
                FormClasses.margin
            }`}
            onSubmit={handleAssign}
        >
            <div
                className={`${
                    InputClasses.flex
                } ${
                    InputClasses.padding
                } ${
                    InputClasses.width
                }`}
            >
                <Dropdown
                    label="Nomor Meja"
                    values={['', ...EmptyTables]}
                    labels={['Pilih Meja',  ...EmptyTables.map(num => (num + 1).toString())]}
                    value={table}
                    onChange={setTable}
                    name='table_number'
                />
            </div>
            <div
                className={`${
                    InputClasses.flex
                } ${
                    InputClasses.padding
                } ${
                    InputClasses.width
                }`}
            >
                <Input
                    label="Jumlah Pelanggan"
                    type="number"
                    name="customer_amount"
                    value={amount}
                    onChange={setAmount}
                />
            </div>
            <SolidBtn
                className={ButtonClasses.flex}
                type='submit'
            >
                <Icon
                    icon='save'
                />
                <span>
                    Simpan
                </span>
            </SolidBtn>
        </form>
    )
}