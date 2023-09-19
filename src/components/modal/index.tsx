'use client';

import { FC, useCallback, useEffect } from "react";
import { ModalProps } from "./props";
import { useDispatch, useSelector } from "react-redux";
import { ModalState, RegisterModal, RemoveModal, ToggleModal } from "@/redux/reducers/modal";
import { BlockerClasses, CloseClasses, ModalClasses, TitleBarClasses, TitleClasses } from "./classes";
import { Card } from "../cards";
import { Icon } from "../icon";

export const Modal : FC<ModalProps> = ({
    id,
    content,
    title,
    visible = false,
}) => {
    const Visible = useSelector(ModalState(id));

    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
        dispatch(ToggleModal({
            id  : id,
            show: false
        }));
    }, [dispatch]);

    
    useEffect(() => {
        dispatch(ToggleModal({
            id      : id,
            show    : visible
        }))
    }, [visible])
    
    useEffect(() => {
        dispatch(RegisterModal(id));

        return () => {
            dispatch(RemoveModal(id));
        }
    }, [])

    if(!Visible) {
        return <></>
    }

    return (
        <>
            <div 
                className={`${
                    BlockerClasses.background
                } ${
                    BlockerClasses.cursor
                } ${
                    BlockerClasses.index
                } ${
                    BlockerClasses.position
                }`}
                onClick={handleClose}
            />
            <Card
                className={`${
                    ModalClasses.height
                } ${
                    ModalClasses.index
                } ${
                    ModalClasses.overflow
                } ${
                    ModalClasses.position
                } ${
                    ModalClasses.transform
                }`}
                title={(
                    <div
                        className={`${
                            TitleBarClasses.display
                        } ${
                            TitleBarClasses.flex
                        }`}
                    >
                        <div 
                            className={`${
                                TitleClasses.flex
                            } ${
                                TitleClasses.size
                            } ${
                                TitleClasses.weight
                            }`}
                        >
                            { title }
                        </div>
                        <div 
                            className={`${
                                CloseClasses.cursor
                            } ${
                                CloseClasses.flex
                            } ${
                                CloseClasses.padding
                            }`}
                            onClick={handleClose}
                        >
                            <Icon
                                icon="close"
                            />
                        </div>
                    </div>
                )}
                content={
                    content
                }
            />
        </>
    )
}