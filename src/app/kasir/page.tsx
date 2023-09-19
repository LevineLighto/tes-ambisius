import { CashierDisplay } from "@/cashier/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Kasir - Restoran Vercel',
    description: 'Bayar Pesanan',
}

export default function MejaPage() {
    return (
        <CashierDisplay/>
    )
}