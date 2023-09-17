import { createSlice } from "@reduxjs/toolkit";
import { AddMenuAction, Menu, RemoveMenuAction } from "./types";

const initialState : Menu[] = [{
    id  : 'lmnhztzg',
    name: 'Soto Ayam'
}, {
    id  : 'lmni044j',
    name: 'Nasi Rawon'
}];

export const MenuSlice = createSlice({
    name        : 'Menu',
    initialState: initialState,
    reducers    : {
        AddMenu : (state, { type, payload } : AddMenuAction) => {
            const modified  = [ ...state ];

            modified.push({
                id  : Date.now().toString(36),
                name: payload
            })

            return modified;
        },
        RemoveMenu : (state, { type, payload } : RemoveMenuAction) => {
            const modified = [ ...state ];
            
            return modified.filter(menu => menu.id != payload);
        }
    }
})