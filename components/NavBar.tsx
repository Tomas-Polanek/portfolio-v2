import Link from "next/link";

export default function NavBar () {
    return (
<nav className = "flex items-center justify-between bg-card px-6 py-4 border-b border-border">
        <Link href="/" className="font-semibold text-foreground">
            Tomáš Polánek
        </Link>

        <div className="flex gap-6 text-muted">
            <Link href="#" className="hover:text-foreground">Domů</Link>
            <Link href="#about" className="hover:text-foreground">O mně</Link>
            <Link href="#projects" className="hover:text-foreground">Projekty</Link>
            <Link href="#contact" className="hover:text-foreground">Kontakt</Link>
        </div>
    </nav> 
    );
}