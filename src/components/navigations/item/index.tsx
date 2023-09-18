'use client';

import { FC } from "react";
import { NavItemClasses as Classes } from "./classes";
import { NavItemProps as Props } from "./props";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItem : FC<Props> = ({
    label,
    href
}) => {
    const path = usePathname();

    return (
        <Link
            className={`${
                Classes.align
            } ${
                Classes.background.base
            } ${
                Classes.background[path == href ? 'active' : 'default']
            } ${
                Classes.color
            } ${
                Classes.display
            } ${
                Classes.flex
            } ${
                Classes.margin
            } ${
                Classes.padding
            } ${
                Classes.radius
            }`}
            href={href}
        >
            { label }
        </Link>
    )
}