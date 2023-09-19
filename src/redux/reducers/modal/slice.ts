import { createSlice } from "@reduxjs/toolkit";
import { Modal, RegisterModalAction, RemoveModalAction, ToggleModalAction } from "./types";

const initialState : Modal[] = [];

export const ModalSlice = createSlice({
    name            : 'Toast',
    initialState    : initialState,
    reducers        : {
        RegisterModal : (state, { type, payload } : RegisterModalAction) => {
            const modified = [ ...state ];

            modified.push({
                id  : payload,
                show: false,
            });

            return modified;
        },
        ToggleModal : (state, { type, payload } : ToggleModalAction) => {
            const index = state.findIndex(modal => modal.id == payload.id);

            console.log(index);

            if(index >= 0) {
                state[index].show = payload.show;
            }
        },
        RemoveModal : (state, { type, payload } : RemoveModalAction ) => {
            const modified = [ ...state ];

            return modified.filter(modal => modal.id != payload);
        }
    }
})