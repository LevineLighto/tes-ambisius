import { FC } from "react";
import { RadioItemClasses as Classes, IconClasses } from "./classes";
import { RadioItemProps as Props } from "./props";
import { Icon } from "@/components/icon";

export const RadioItem : FC<Props> = ({
    label,
    selected = false,
    ...props
}) => (
    <div 
        className={`${
            Classes.background[selected ? 'selected' : 'default']
        } ${
            Classes.border
        } ${
            Classes.color[selected ? 'selected' : 'default']
        } ${
            Classes.cursor
        } ${
            Classes.flex
        } ${
            Classes.margin
        } ${
            Classes.padding
        } ${
            Classes.radius
        }`}
        {...props}
    >
        <Icon
            icon={selected ? 'circleCheck' : 'circle'}
            className={`${
                IconClasses.color[selected ? 'selected' : 'default']
            }`}
        />
        <span>
            {
                label
            }
        </span>
    </div>
)