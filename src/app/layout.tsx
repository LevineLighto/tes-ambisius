import { ReduxProvider } from '@/redux/components'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/navigations'
import { Header } from '@/components/header'
import { ToastContainer } from '@/components/toast'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Restoran Vercel',
    description: 'Restoran fiktif untuk tes programming Ambisius Lab',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body 
                className={inter.className}
            >
                <ReduxProvider>
                    <Header/>
                    <Navigation/>
                    <main>
                        { children }
                    </main>
                    <ToastContainer/>
                </ReduxProvider>
            </body>
        </html>
    )
}
