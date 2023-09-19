import { OrderForm } from "@/order/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Order - Restoran Vercel',
    description: 'Input pesanan pelanggan Restoran Vercel',
}

export default function MenuPage() {
    return (
        <OrderForm/>
    )
}