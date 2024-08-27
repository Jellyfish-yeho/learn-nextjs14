"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname(); //유저가 어느 url에 있는지 알려주는 hook
    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                    {path === "/" ? "✨" : ""}
                </li>
                <li>
                    <Link href={"/about-us"}>About Us</Link>
                    {path === "/about-us" ? "🎀" : ""}
                </li>
            </ul>
        </nav>
    );
}
