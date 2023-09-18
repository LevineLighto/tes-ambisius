'use client';

import { 
    FC,
    useCallback, 
    useEffect, 
    useState
} from "react";

import { RadioProps } from "./props";
import { RadioItem } from "../radio-item";
import { ContainerClasses, LabelClasses } from "./classes";

export const Radio : FC<RadioProps> = ({
    label = '',
    labels,
    name,
    onChange,
    value,
    values,
}) => {
    const [selected, setSelected] = useState(value);

    const handleSelect = useCallback<(value: any) => any>((value) => {
        return () => {
            setSelected(value);
        }
    }, [onChange])

    useEffect(() => {
        if(value == selected) {
            return;
        }

        setSelected(value);
    }, [value])

    return (
        <>
            <input 
                name={name}
                type="hidden"
            />
            <div
                className={`${
                    ContainerClasses.display
                } ${
                    ContainerClasses.flex
                }`}
            >
                {
                    label != '' && (
                        <div 
                            className={`${
                                LabelClasses.margin
                            } ${
                                LabelClasses.weight
                            } ${
                                LabelClasses.width
                            }`}
                        >
                            { label }
                        </div>
                    )
                }
                {
                    values.map((val, index) => (
                        <RadioItem
                            key={`radio-item-${index}`}
                            label={labels[index]}
                            onClick={handleSelect(val)}
                            selected={val == selected}
                        />
                    ))
                }
            </div>
        </>
    )
}