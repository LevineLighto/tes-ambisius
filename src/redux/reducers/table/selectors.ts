import { Store } from "@/redux/store/types";

export const Tables = (store: Store) => store.Table;
export const TableOrders = (table_no?: number) => {
    return (store: Store) => {
        if(typeof table_no == 'undefined') {
            return [];
        }

        return store.Table[table_no].orders
    };
}