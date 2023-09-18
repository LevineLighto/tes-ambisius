'use client';

import { 
    ChangeEventHandler, 
    FC, 
    useCallback, 
    useEffect, 
    useState
} from "react";

import { DropdownProps as Props } from "./props";
import { ContainerClasses, InputClasses, LabelClasses } from "../classes";

export const Dropdown : FC<Props> = ({
    className = '',
    id  = '',
    label,
    labels,
    name,
    onChange,
    value,
    values,
    ...props
}) => {
    const [selected, setSelected] = useState(value);

    const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>> ((event) => {
        const val = event.target.value;

        setSelected(val);

        if(typeof onChange == 'function') {
            onChange(val);
        }
    }, [onChange]);

    useEffect(() => {
        if(value == selected) 
            return;

        setSelected(value);
    }, [value])

    return (
        <div
            className={ContainerClasses.position}
        >
            <select
                id={`select-${name}${id != '' ? `-${id}` : ''}`}
                name={name}
                onChange={handleChange}
                placeholder={ label ? label : name}
                value={selected}
                className={`${
                    InputClasses.background
                } ${
                    InputClasses.border
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
                } ${
                    className
                }`}
                { ...props }
            >
                {
                    values.map((val, index) => (
                        <option
                            key={`select-option-${name}-${index}`}
                            value={val}
                        >
                            { labels[index] ? labels[index] : val }
                        </option>
                    ))
                }
            </select>
            <label
                htmlFor={`select-${name}${id != '' ? `-${id}` : ''}`}
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
                { label ? label : name }
            </label>
        </div>
    )
}