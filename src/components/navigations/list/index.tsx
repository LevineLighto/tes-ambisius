import { FC } from "react";
import { NavListClasses as Classes } from "./classes";
import { NavListProps as Props } from "./props";
import { NavItem } from "../item";

export const NavList : FC<Props> = ({
    hrefs,
    labels,
}) => (
    <div 
        className={`${
            Classes.background
        } ${
            Classes.display
        } ${
            Classes.flex
        } ${
            Classes.radius
        }`}
    >
        {
            hrefs.map((href, index) => (
                <NavItem
                    key={`nav-item-${index}`}
                    href={href}
                    label={labels[index]}
                />
            ))
        }
    </div>
)