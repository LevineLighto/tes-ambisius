import { createSlice } from "@reduxjs/toolkit";
import { CleanTableAction, OrderAction, Table, UseTableAction } from "./types";

const initialState: Table[] = [{
    customers   : 0,
    orders      : []
}, {
    customers   : 0,
    orders      : [],
}, {
    customers   : 0,
    orders      : []
}];

export const TableSlice = createSlice({
    name        : 'table',
    initialState: initialState,
    reducers    : {
        UseTable : (state, { type, payload }: UseTableAction) => {
            const modified = [ ...state ];

            const { customers, number } = payload;

            modified[number].customers = customers;

            return modified;
        },
        CleanTable : (state, { type, payload } : CleanTableAction) => {
            const modified = [ ...state ];

            modified[payload] = {
                customers   : 0,
                orders      : []
            };

            return modified;
        },
        Order : (state, { type, payload } : OrderAction) => {
            const modified = [ ...state ];

            const { table, orders } = payload;
            modified[table].orders = orders;

            return modified
        }
    }
})