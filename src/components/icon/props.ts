import { Icons } from "@/config/icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IconProps extends Omit<FontAwesomeIconProps, 'fixedWidth' | 'icon'> {
    icon: keyof typeof Icons
}