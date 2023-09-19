import { Store } from "@/redux/store/types"

export const ModalState = (id : string) => {
    return (store : Store) => {
        const Modal = store.Modal.find(modal => modal.id == id);

        if(!Modal) return false;

        return Modal.show;
    };
}