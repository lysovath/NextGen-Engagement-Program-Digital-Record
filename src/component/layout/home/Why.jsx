import AboutCard from "../../card/AboutCard";
import useRevealElment from "../../../hooks/useRevealElement";

export default function Why(){
    useRevealElment();
    return (
        <section id="about" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20 reveal-card opacity-0 translate-y-10 transition-all duration-1000">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Why Join <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">NextGen Engagement?</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Step into a next-generation ecosystem that redefines learning through collaboration and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AboutCard>
                        <AboutCard.Icon><svg className="w-7 h-7 text-orange-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></AboutCard.Icon>
                        <AboutCard.Title>Expand Connection</AboutCard.Title>
                        <AboutCard.Description>
                            Master <span className="text-white font-medium">networking skills</span> by engaging directly with senior mentors, and a network of ambitious peers.
                        </AboutCard.Description>
                    </AboutCard>

                    <AboutCard>
                        <AboutCard.Icon><svg className="w-7 h-7 text-orange-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></AboutCard.Icon>
                        <AboutCard.Title>Advanced Prep</AboutCard.Title>
                        <AboutCard.Description>
                            Build a professional foundation in <span className="text-white font-medium">Web Design & Algorithms</span> while validating your skills with recognized certification.
                        </AboutCard.Description>
                    </AboutCard>

                    <AboutCard>
                        <AboutCard.Icon><svg className="w-7 h-7 text-orange-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 13V4m0 0L9 7m3-3l3 3"></path></svg></AboutCard.Icon>
                        <AboutCard.Title>Showcase Day</AboutCard.Title>
                        <AboutCard.Description>
                            Pitch your hard work to <span className="text-white font-medium">CADT judges </span> and organizers in NextGen days.
                        </AboutCard.Description>
                    </AboutCard>
                </div>
            </div>
        </section>
    );
}