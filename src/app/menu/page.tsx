import { MenuForm, MenuTable } from "@/menu/components";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Menu - Restoran Vercel',
    description: 'Pengaturan Menu di Restoran Vercel',
}

export default function MenuPage() {
    return (
        <>
            <MenuForm/>
            <MenuTable/>
        </>
    )
}