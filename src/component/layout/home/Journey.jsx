import JourneyCard from "../../card/JourneyCard";
import useRevealElment from "../../../hooks/useRevealElement";

export default function Journey() {
    useRevealElment("reveal-journey",0.1 , ["opacity-0", "translate-y-10", "translate-y-12"], ["opacity-100", "translate-y-0"]);
    return (
        <section id="journey" className="bg-[#0a192f] px-6 py-20 md:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-full h-12 text-slate-950" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 reveal-journey opacity-0 translate-y-10 transition-all duration-1000">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                        Event <span className="text-orange-500 underline decoration-4 underline-offset-8">Journey</span>
                    </h2>
                    <p className="text-slate-300 text-lg font-light italic">
                        A three-phase immersive experience from start to showcase.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <JourneyCard cardNumber="01" title="Recruitment & Orientation" duration="2 Weeks" list={["Program Launch", "Application Info", "Icebreakers"]}></JourneyCard>
                    <JourneyCard cardNumber="02" title="Intensive Training" duration="5 Weeks" list={["Weekly Training", "Boost Collaboration", "Mid-Program Review"]}></JourneyCard>
                    <JourneyCard cardNumber="03" title="Showcase Day" duration="2 Days" list={["Project Presentation", "Awards & Graduation", "Photo Sessions"]}></JourneyCard>
                </div>
            </div>
        </section>
    );
}