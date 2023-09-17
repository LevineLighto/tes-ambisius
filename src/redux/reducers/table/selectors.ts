import { Store } from "@/redux/store/types";

export const Tables = (store: Store) => store.Table;
export const TableOrders = (table_no : number) => {
    return (store: Store) => store.Table[table_no].orders;
}