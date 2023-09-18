import { createSlice } from "@reduxjs/toolkit";
import { CleanTableAction, OrderAction, ResetAction, Table, UseTableAction } from "./types";

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
            const { customers, number } = payload;

            state[number].customers = customers;
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
            const { table, orders } = payload;
            state[table].orders = orders;
        },
        ResetTable : (state, { type, payload } : ResetAction) => {
            return initialState
        }
    }
})