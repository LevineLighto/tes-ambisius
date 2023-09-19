import { SolidBtn } from "@/components/buttons";
import Link from "next/link";

export default function Home () {
    return (
        <div className="text-center py-8">
            <Link
                href="/menu"
            >
                <SolidBtn>
                    Menuju ke laman Menu
                </SolidBtn>
            </Link>
        </div>
    )
}