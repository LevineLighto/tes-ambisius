import { ModalSlice } from "./slice";
import { ModalState } from "./selectors";

export const {
    RegisterModal,
    ToggleModal,
    RemoveModal
} = ModalSlice.actions;

const ModalReducer = ModalSlice.reducer;

export default ModalReducer;

export {
    ModalState
}