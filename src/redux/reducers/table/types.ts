export interface Table {
    customers   : number,
    orders      : string[],
}

export interface UseTableAction {
    type    : string,
    payload : {
        number      : number,
        customers   : number,
    },
}

export interface CleanTableAction {
    type    : string,
    payload : number,
}

export interface OrderAction {
    type    : string,
    payload : {
        table   : number,
        orders  : string[],
    }
}

export interface ResetAction {
    payload : void,
    type    : string
}