import { Order } from "@/redux/reducers/table/types";

export interface OrderInputProps {
    onChange?   : (value : Order) => any,
    onDelete?   : () => any,
    value?      : Order
}