'use client';

import { 
    ChangeEventHandler,
    FC, 
    useCallback, 
    useEffect, 
    useState
} from "react";
import { BaseInputProps as Props } from "../props";
import { 
    ContainerClasses, 
    InputClasses, 
    LabelClasses
} from "../classes";

export const Input : FC<Props> = ({
    onChange,
    name,
    id = '',
    label,
    value,
    readOnly,
    ...props
}) => {
    const [val, setVal] = useState(value);

    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
        const newValue = event.target.value;

        setVal(newValue);

        if(typeof onChange == 'function') {
            onChange(newValue)
        }
    }, [onChange]);

    useEffect(() => {
        if(value == val) 
            return;

        setVal(value);
    }, [value])

    return (
        <div 
            className={ContainerClasses.position}
        >
            <input
                name={name}
                id={`input-${name}${id != '' ? `-${id}` : ''}`}
                className={`${
                    readOnly && InputClasses.background
                } ${
                    !readOnly && InputClasses.border
                } ${
                    InputClasses.display
                } ${
                    InputClasses.outline
                } ${
                    InputClasses.padding
                } ${
                    InputClasses.placeholder
                } ${
                    InputClasses.radius
                } ${
                    InputClasses.role
                } ${
                    InputClasses.width
                }`}
                placeholder={label ? label : name }
                value={val}
                onChange={handleChange}
                readOnly={readOnly}
                { ...props }
            />
            <label
                htmlFor={`input-${name}${id != '' ? `-${id}` : ''}`}
                className={`${
                    LabelClasses.color
                } ${
                    LabelClasses.display
                } ${
                    LabelClasses.padding
                } ${
                    LabelClasses.position
                } ${
                    LabelClasses.transition
                } ${
                    LabelClasses.weight
                }`}
            >
                {label ? label : name }
            </label>
        </div>
    )
}