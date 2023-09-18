import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProps } from "./props";
import { Icons } from "@/config/icons";
import { IconClasses } from "./classes";

export const Icon : FC<IconProps> = ({
    icon,
    ...props
}) => (
    <FontAwesomeIcon
        className={IconClasses.margin}
        fixedWidth={true}
        icon={Icons[icon]}
        {...props}
    />
)