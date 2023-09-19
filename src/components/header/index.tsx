'use client';

import Image from "next/image";
import Link from "next/link";
import { FC, useCallback } from "react";
import { SolidBtn } from "../buttons";
import { Icon } from "../icon";
import { AppInfoClasses, ContainerClasses, HeaderClasses, LinkClasses } from "./classes";
import { Modal } from "../modal";
import { useDispatch } from "react-redux";
import { ToggleModal } from "@/redux/reducers/modal";

export const Header : FC = () => {
    const dispatch = useDispatch();

    const handleShowInfo = useCallback(() => {
        dispatch(ToggleModal({
            id  : 'about-app',
            show: true,
        }))
    }, [dispatch]);
    return (
        <>
            <header
                className={ContainerClasses.background}
            >
                <div
                    className={`${
                        HeaderClasses.display
                    } ${
                        HeaderClasses.flex
                    } ${
                        HeaderClasses.margin
                    } ${
                        HeaderClasses.padding
                    } ${
                        HeaderClasses.width
                    }`}
                >
                    <Link
                        href="/"
                        className={`${
                            LinkClasses.size
                        } ${
                            LinkClasses.weight
                        }`}
                    >
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={100}
                            height={24}
                            priority
                        />
                        Restaurant
                    </Link>
                    <SolidBtn
                        onClick={handleShowInfo}
                    >
                        <Icon
                            icon="info"
                            size="lg"
                        />
                    </SolidBtn>
                </div>
            </header>
            <Modal
                id="about-app"
                title="Panduan Aplikasi"
                content={(
                    <ol
                        className={`${
                            AppInfoClasses.listStyle
                        } ${
                            AppInfoClasses.padding
                        }`}
                    >
                        <li
                            className={AppInfoClasses.margin}
                        >
                            <strong>Menu</strong> untuk pengaturan menu yang disajikan di restoran.
                        </li>
                        <li
                            className={AppInfoClasses.margin}
                        >
                            <strong>Meja</strong> untuk pengatur penempatan pelanggan yang mengunjungi 
                            restoran.
                        </li>
                        <li
                            className={AppInfoClasses.margin}
                        >
                            <strong>Order</strong> untuk mencatat pesanan yang dipesan pelanggan.
                        </li>
                        <li
                            className={AppInfoClasses.margin}
                        >
                            <strong>Dapur</strong> untuk melihat daftar pesanan yang dipesan pelanggan.
                        </li>
                        <li
                            className={AppInfoClasses.margin}
                        >
                            <strong>Kasir</strong> untuk mencetak invoice pesanan pelanggan dan 
                            dapat membersihkan meja setelah mencetak invoice.
                        </li>
                    </ol>
                )}
            />
        </>
    )
}