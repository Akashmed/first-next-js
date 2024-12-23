"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    const handler = () => {
        router.push('/login')
    }
    return (
        <nav className="bg-red-500 px-6 py-5 flex justify-between items-center">
            <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
            <ul className="flex justify-between items-center space-x-4">
                {links.map(link => <Link className={`${pathName === link.path && 'text-white'}`} key={link.path} href={`${link.path}`}>{link.title}</Link>)}
            </ul>
            <button onClick={handler}>Login</button>
        </nav>

    );
};

export default Navbar;