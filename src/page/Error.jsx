import { Link } from "react-router-dom";

export default function Error({ message = "The page you are looking for does not exist." }) {
    return (
        <div className="bg-[#0f172a] text-slate-200 antialiased grow">
            <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="group flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="font-medium">Return to Hub</span>
                    </Link>
                </nav>
            </header>
            <section className="relative pt-16 pb-12 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-600/20 blur-[120px] rounded-full"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000">
                    <h1 className="text-4xl md:text-5xl font-black text-red-500 mb-4">
                        404 <span className="text-orange-500">Page Not Found</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        {message}
                    </p>
                </div>
            </section>
        </div>
    );
}