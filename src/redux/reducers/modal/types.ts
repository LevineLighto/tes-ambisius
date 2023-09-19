export interface Modal {
    id  : string,
    show: boolean,
}

export interface RegisterModalAction {
    type    : string,
    payload : string,
}

export interface ToggleModalAction {
    type    : string,
    payload : {
        id  : string,
        show: boolean,
    }
}

export interface RemoveModalAction {
    type    : string,
    payload : string,
}