import useScrollTo from "../../../hooks/useScrollTo";


export default function Hero() {
    const scrollTo = useScrollTo();
    return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-24 px-6 bg-linear-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-orange-200 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-orange-300/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[15%] left-[5%] lg:top-[20%] lg:left-[15%] animate-float-slow">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white shadow-2xl rounded-2xl flex items-center justify-center border border-orange-100 transform -rotate-12">
                    <span className="text-orange-500 font-black text-lg lg:text-xl">B1</span>
                </div>
            </div>

            <div className="absolute bottom-[15%] left-[5%] lg:bottom-[25%] lg:left-[10%] animate-float">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white shadow-xl rounded-full flex items-center justify-center border border-orange-100 rotate-6 lg:rounded-3xl">
                    <span className="text-orange-400 font-black text-md lg:text-lg">B2</span>
                </div>
            </div>

            <div className="absolute top-[10%] right-[2%] lg:top-[15%] lg:right-[15%] animate-float-delayed">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-orange-500 shadow-2xl shadow-orange-500/40 rounded-2xl lg:rounded-3xl flex items-center justify-center transform rotate-12">
                    <span className="text-white font-black text-xl lg:text-3xl">B3</span>
                </div>
            </div>

            <div className="absolute bottom-[30%] right-[5%] lg:right-[20%] w-6 h-6 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-[10%] left-[40%] w-3 h-3 bg-orange-600 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">    
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] md:leading-[0.9] mb-8 tracking-tighter uppercase">
                Empowering The 
                <br />
                <span className="text-orange-400">Next Generation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
                A transformative <span className="text-orange-600 font-bold">3-phase journey</span> designed to recruit, train, and showcase future innovators.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                <a className="bg-orange-400 text-white font-black tracking-widest text-xs px-10 py-5 rounded-2xl shadow-lg shadow-orange-600/30 hover:bg-orange-700 hover:shadow-orange-600/50 transition-all transform hover:-translate-y-1 active:scale-95" onClick={() => scrollTo("about")}>
                    LEARN MORE
                </a>
                <a className="bg-white text-slate-800 font-black tracking-widest text-xs px-10 py-5 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-orange-500/40 hover:bg-orange-50 transition-all transform hover:-translate-y-1" onClick={() => scrollTo("gallery")}>
                    EXPLORE GALLERY
                </a>
            </div>
        </div>
    </section>
    );
}