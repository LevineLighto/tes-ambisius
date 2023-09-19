import { ToastSlice } from "./slice";

export const {
    CreateToast,
    DeleteToast
} = ToastSlice.actions;

const ToastReducer = ToastSlice.reducer;

export default ToastReducer;