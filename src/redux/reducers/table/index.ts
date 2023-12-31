import { TableSlice } from "./slice";

import { 
    Tables, 
    TableOrders,
} from "./selectors";

export const {
    UseTable,
    CleanTable,
    Order,
    ResetTable
} = TableSlice.actions;

const TableReducer = TableSlice.reducer;

export default TableReducer;

export {
    Tables,
    TableOrders
}