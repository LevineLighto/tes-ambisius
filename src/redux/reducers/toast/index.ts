import { ToastSlice } from "./slice";
import { Toasts } from "./selectors";

export const {
    CreateToast,
    DeleteToast
} = ToastSlice.actions;

const ToastReducer = ToastSlice.reducer;

export default ToastReducer;

export {
    Toasts
}