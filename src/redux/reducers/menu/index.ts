import { MenuSlice } from "./slice";

import { 
    Menu,
    MenuItem
} from "./selectors";

export const {
    AddMenu,
    RemoveMenu,
    ResetMenu
} = MenuSlice.actions;

const MenuReducer = MenuSlice.reducer;

export default MenuReducer;

export {
    Menu,
    MenuItem
}