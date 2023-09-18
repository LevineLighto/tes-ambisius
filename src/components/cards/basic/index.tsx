import { FC } from 'react';
import { BasicCardClasses as Classes, TitleClasses } from './classes';
import { BasicCardProps as Props } from './props';

export const BasicCard : FC<Props> = ({
    className = '',
    content,
    title,
}) => (
    <div
        className={`${
            Classes.background
        } ${
            Classes.padding
        } ${
            Classes.radius
        } ${
            Classes.shadow
        } ${
            className
        }`}
    >
        {
            typeof title != 'undefined' && (
                <div 
                    className={`${
                        TitleClasses.margin
                    } ${
                        TitleClasses.size
                    } ${
                        TitleClasses.weight
                    }`}
                >
                    { title }
                </div>
            )
        }
        {
            typeof content != 'undefined' && (
                <div>
                    { content }
                </div>
            )
        }
    </div>
)