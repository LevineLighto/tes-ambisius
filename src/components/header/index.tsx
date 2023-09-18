import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { SolidBtn } from "../buttons";
import { Icon } from "../icon";
import { ContainerClasses, HeaderClasses, LinkClasses } from "./classes";

export const Header : FC = () => {
    return (
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
                >
                    <Icon
                        icon="info"
                        size="lg"
                    />
                </SolidBtn>
            </div>
        </header>
    )
}