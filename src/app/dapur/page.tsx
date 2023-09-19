import { TableList } from "@/tables/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dapur - Restoran Vercel',
    description: 'Daftar Pesanan di Restoran Vercel',
}

export default function MejaPage() {
    return (
        <TableList/>
    )
}