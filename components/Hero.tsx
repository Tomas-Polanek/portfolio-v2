 
export default function Hero() {
    return(
         <section id="hero" className="px-6 py-16 text-center relative isolate">
            <div className="aurora"></div>
            <p className="inline-block rounded-full border border-border bg-white/5 px-3 py-1 text-sm text-muted">
                Software developer
            </p>
            <h1 className=" mt-6 text-5xl font-semibold tracking-tighter sm:text-7xl">
                Hi, I am{" "}
                <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                Tomáš
                </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
                I build modern websites with React and Next.js
            </p>
         </section>
    );
}
 
