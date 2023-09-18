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

export const MenuForm : FC = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(event => {
        event.preventDefault();

        if(name == '') {
            return;
        }

        dispatch(AddMenu(name));
        setName('');
    }, [name, dispatch, AddMenu]);

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