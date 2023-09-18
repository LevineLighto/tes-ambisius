import { TableForm, TableList } from "@/tables/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Meja - Restoran Vercel',
    description: 'Pengaturan Meja di Restoran Vercel',
}

export default function MejaPage() {
    return (
        <>
            <TableForm/>
            <TableList/>
        </>
    )
}