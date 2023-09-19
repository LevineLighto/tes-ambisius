'use client';

import { CreateToast } from "@/redux/reducers/toast";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useToast = () => {
    const dispatch  = useDispatch()

    const create    = useCallback((message : string) => {
        dispatch(CreateToast(message));
    }, [dispatch]);

    return {
        create
    }
}