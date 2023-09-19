'use client';

import { 
    FC,
    FormEventHandler,
    useCallback,
    useState,
} from 'react';

import { 
    ButtonClasses, 
    MenuFormClasses as FormClasses, 
    InputClasses
} from './classes';

import { Input } from '@/components/inputs';
import { SolidBtn } from '@/components/buttons';
import { Icon } from '@/components/icon';
import { useDispatch } from 'react-redux';
import { AddMenu } from '@/redux/reducers/menu';
import { useToast } from '@/hooks/interactive';

export const MenuForm : FC = () => {
    const [name, setName] = useState('');

    const dispatch  = useDispatch();
    const Toast     = useToast();

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(event => {
        event.preventDefault();

        if(name == '') {
            return;
        }

        dispatch(AddMenu(name));
        Toast.create(`Menu ${name} berhasil ditambahkan`);
        setName('');
    }, [name, dispatch, AddMenu, Toast]);

    return (
        <form
            className={`${
                FormClasses.display
            } ${
                FormClasses.flex
            } ${
                FormClasses.margin
            }`}
            onSubmit={handleSubmit}
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
                <Input
                    name="name"
                    label="Nama Menu Baru"
                    value={name}
                    onChange={setName}
                />
            </div>
            <SolidBtn
                className={ButtonClasses.flex}
                type='submit'
                disabled={name == ''}
            >
                <Icon
                    icon='add'
                />
                <span>
                    Tambah
                </span>
            </SolidBtn>
        </form>
    )
}