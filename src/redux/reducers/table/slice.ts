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
            const modified = [ ...state[table].orders ];

            orders.forEach(order => {
                const index = modified.findIndex(val => order.id == val.id);

                if(index >= 0) {
                    modified[index].amount += order.amount;
                    return;
                }

                modified.push(order);
            })

            state[table].orders = modified;
        },
        ResetTable : (state, { type, payload } : ResetAction) => {
            return initialState
        }
    }
})