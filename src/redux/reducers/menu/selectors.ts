import { Store } from "@/redux/store/types";

export const Menu       = (state : Store) => state.Menu;
export const MenuItem   = (id : string) => {
    return (state : Store) => state.Menu.find(menuItem => menuItem.id == id);
}