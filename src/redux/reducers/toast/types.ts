export interface Toast {
    id      : string,
    message : string,
}

export interface CreateToastAction {
    type    : string,
    payload : string,
}

export interface DeleteToastAction {
    type    : string,
    payload : string,
}