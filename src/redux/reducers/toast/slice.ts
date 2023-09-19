import { createSlice } from "@reduxjs/toolkit";
import { CreateToastAction, DeleteToastAction, Toast } from "./types"

const initialState : Toast[] = [];

export const ToastSlice = createSlice({
    name        : 'Toast',
    initialState: initialState,
    reducers    : {
        CreateToast : (state, { type, payload } : CreateToastAction ) => {
            const modified = [ ...state ];

            modified.push({
                id      : Date.now().toString(36),
                message : payload,
            });

            return modified;
        },
        DeleteToast : (state, { type, payload } : DeleteToastAction ) => {
            const modified = [ ...state ];

            return modified.filter(toast => toast.id != payload);
        }
    }
})