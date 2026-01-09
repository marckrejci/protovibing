import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="w-full flex justify-center pt-16 md:pt-20">
            <Link href="/" className="transition-transform hover:scale-105 active:scale-95 duration-200">
                <Image
                    src="/images/logo-402x.png"
                    alt="ProtoVibing.ai logo"
                    width={64}
                    height={64}
                    className="w-12 h-auto md:w-16"
                    priority
                />
            </Link>
        </header>
    )
}
