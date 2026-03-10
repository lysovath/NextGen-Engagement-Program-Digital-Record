import useRevealElment from "../../../hooks/useRevealElement";
import GridImage from "../../ui/GridImage";
import VideoCard from "../../card/VideoCard";

// Image & Video imports
import orientation1 from "../../../assets/eventPhotos/orientation1.jpg";
import orientation from "../../../assets/eventPhotos/orientation.jpg";
import firstClass from "../../../assets/eventPhotos/firstClass.jpg";
import firstClass2 from "../../../assets/eventPhotos/firstClass2.jpg";
import lastClass1 from "../../../assets/eventPhotos/lastClass1.jpg";
import lastClass2 from "../../../assets/eventPhotos/lastClass2.jpg";
import award1 from "../../../assets/eventPhotos/award1.jpg";
import award from "../../../assets/eventPhotos/award.jpg";

export default function Gallery() {
    useRevealElment("reveal-gallery", 0.1 , ["opacity-0", "translate-y-8", "translate-y-10", "translate-y-12"],["opacity-100", "translate-y-0"]);
    return (
    <section id="gallery" className="py-32 bg-[#0a192f] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 reveal-gallery opacity-0 translate-y-10 transition-all duration-1000">
                    <div className="max-w-2xl">
                        <span className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase block mb-4">Photos Collection</span>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.9] uppercase">
                            Capturing the <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                NextGen Journey
                            </span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-sm text-sm leading-relaxed border-l border-orange-500/30 pl-6">
                        Together, organizers, lecturers, judges, and participants create more than a program — they create the NextGen Engagement memory.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                    <GridImage src={orientation1} alt="Orientation Day" row={2}>
                        <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">Phase 01</p>
                            <h4 className="text-white text-xl font-bold">Orientation Day</h4>
                        </div>
                    </GridImage>

                    <GridImage src={orientation} alt="Introduction" col={2}>
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-white text-orange-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">Program Intro</span>
                        </div>
                    </GridImage>

                    <GridImage src={firstClass} alt="Networking">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600/20 backdrop-blur-[2px]">
                            <h4 className="text-orange-500 font-bold border-b-2 border-white">Networking</h4>
                        </div>
                    </GridImage>

                    <GridImage src={firstClass2} alt="Study">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600/20 backdrop-blur-[2px]">
                            <h4 className="text-orange-600 font-bold border-b-2 border-white">First Class</h4>
                        </div>
                    </GridImage>

                    <GridImage src={lastClass1} alt="Last Class">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600/20 backdrop-blur-[2px]">
                            <h4 className="text-orange-600 font-bold border-b-2 border-white">Last Class</h4>
                        </div>                        
                    </GridImage>

                    <GridImage src={lastClass2} alt="Last Class 2">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600/20 backdrop-blur-[2px]">
                            <h4 className="text-orange-500 font-bold border-b-2 border-white">Last Class</h4>
                        </div>
                    </GridImage>

                    <GridImage src={award1} alt="Study">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600/20 backdrop-blur-[2px] hover:scale-105">
                            <h4 className="text-orange-500 font-bold border-b-2 border-white">Nextgen Day</h4>
                        </div>                        
                    </GridImage>

                    <GridImage src={award} alt="Award" col={2}>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-orange-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <h4 className="text-white text-2xl font-black italic uppercase">Best Project Award</h4>
                            <p className="text-white/80 text-sm">NextGen Day-2 Highlights</p>
                        </div>
                    </GridImage>

                </div>
                <div id="bts" className="relative">
                    <div className="flex items-center gap-6 mb-12 reveal-gallery opacity-0 translate-y-10 transition-all duration-1000">
                    <h2 className="text-2xl md:text-2xl font-extrabold text-white tracking-tighter leading-[0.9] uppercase">
                            The journey <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                Training & Reflections
                            </span>
                        </h2>
                        <div className="grow h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <VideoCard src="/videos/IMG_8585-1.mp4" fallbackSrc="/videos/IMG_8585.mp4" label="Training" title="Training Phase" description="Students and trainers engagement" duration="01:01"></VideoCard>
                        <VideoCard src="/videos/All_IN-1.mp4" fallbackSrc="/videos/All_IN.mp4" label="Feedback" title="Participant Feedback" description="Real reactions from our Nextgen participants." duration="04:20"></VideoCard>
                    </div>
                </div> 
            </div>
        </section>
    );
}