import { BaseInputProps } from "../props";

export interface DropdownProps extends BaseInputProps<'select'> {
    values  : any[],
    labels  : string[],
}