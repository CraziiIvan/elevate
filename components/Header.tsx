import Image from "next/image";
import NavLinks from "@/components/NavLinks";
import { Button } from "@/components/ui/Button";

import logoHeader from "@/public/logo-header.svg"

export default function Header() {
    return (
        <header className=" h-13 flex items-center px-6 border-b border-b-gray-3 justify-between">
            <div className=" flex items-center gap-x-6">
            <Image src={logoHeader} alt="Elevate" height={20} width={33.35}/>
            <NavLinks/>
            </div>
            <div className=" gap-x-6 flex items-center">
            <Button >Subscribe</Button>
            <Button variant="outline">Submit</Button>
            </div>
        </header>
    )
}

