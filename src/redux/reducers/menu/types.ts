export interface Menu {
    id  : string,
    name: string,
}

export interface AddMenuAction {
    payload : string,
    type    : string
}

export interface RemoveMenuAction {
    payload : string,
    type    : string
}

export interface ResetAction {
    payload : void,
    type    : string
}