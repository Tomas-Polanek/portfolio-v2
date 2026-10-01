import Link from "next/link";

export default function NavBar () {
    return (
<nav className = "flex items-center justify-between bg-card px-6 py-4 border-b border-border">
        <Link href="/" className="font-semibold text-foreground">
            Tomáš Polánek
        </Link>

        <div className="flex gap-6 text-muted">
            <Link href="#" className="transition-colors duration-200 hover:text-foreground">Home</Link>
            <Link href="#about" className="transition-colors duration-200 hover:text-foreground">About me</Link>
            <Link href="#projects" className="transition-colors duration-200 hover:text-foreground">Projects</Link>
            <Link href="#contact" className="transition-colors duration-200 hover:text-foreground">Contact</Link>
        </div>
    </nav> 
    );
}