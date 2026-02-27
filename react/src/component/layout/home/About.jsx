
import Banner from "../../card/BannerCard";
import useRevealElment from "../../../hooks/useRevealElement";

export default function About() {
    useRevealElment("reveal-item",0.2 , ["opacity-0", "translate-y-10", "translate-x-5", "scale-95"],["opacity-100", "translate-y-0", "translate-x-0", "scale-100"]);
    return (
        <section className="bg-[#0a0f1a] py-20 md:py-32 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto border-t border-white/5 pt-20 md:pt-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    <div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                                What is <span className="text-orange-500 underline decoration-4 underline-offset-8 decoration-orange-500/30">NextGen Engagement?</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                                Initiated by the <span className="text-white">Department of Computer Science</span>, this is a five-week intensive experience designed for first-year undergraduates to bridge the gap between theory and innovation.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Banner>
                                <Banner.Icon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></Banner.Icon>
                                <Banner.Title>Strengthen technical competencies</Banner.Title>
                            </Banner>
                            <Banner>
                                <Banner.Icon><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></Banner.Icon>   
                                <Banner.Title>Promote peer-to-peer learning</Banner.Title>
                            </Banner>
                        </div>
                    </div>

                    <div className="scale-95 transition-all duration-1000 delay-300 relative group">
                        <div className="absolute inset-0 bg-orange-500 rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-center overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/5 to-transparent"></div>
                            
                            <span className="text-orange-500 font-mono text-s uppercase tracking-[0.5em] mb-4 block">Timeline</span>
                            <h3 className="text-7xl sm:text-8xl md:text-[10rem] font-black text-white leading-none tracking-tighter mb-4 transition-transform group-hover:scale-105 duration-700">
                                5<span className="text-orange-500">+</span>
                            </h3>
                            <p className="text-white font-bold text-sm md:text-xl uppercase tracking-widest border-t border-white/10 pt-8">
                                Weeks of Intensive Growth
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}