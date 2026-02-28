

import batches from "../data/partcipantData";
import ProfileCard from "../component/card/ProfileCard";
import { useParams } from "react-router-dom";
import useRevealElment from "../hooks/useRevealElement";
import Error from "./Error";
import { Link } from "react-router-dom";

{/*Add data to ../data/participantData.js for more batches or participant */}
export default function Batch(){
    const { batchNumber } = useParams();
    useRevealElment("reveal-b1", 0.1, ["opacity-0", "translate-y-8", "translate-y-10"], ["opacity-100", "translate-y-0"]);
    if(batchNumber < 1 || batchNumber > batches.length || isNaN(batchNumber)){
        return(
            <>
                <Error message="Invalid batch number." />
            </>
        );
    }
    return(
        <div className="bg-[#0f172a] text-slate-200 antialiased grow">
            <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="group flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="font-medium">Return to Hub</span>
                    </Link>
                    <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest">
                        {batches[batchNumber - 1].batchTitle}
                    </div>
                </nav>
            </header>

            <section className="relative pt-16 pb-12 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-600/20 blur-[120px] rounded-full"></div>
                
                <div className="max-w-7xl mx-auto text-center relative z-10 reveal-b1 opacity-0 translate-y-10 transition-all duration-1000">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Meet the <span className="text-orange-500">B{batchNumber} participants</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        {batches[batchNumber - 1].description}
                    </p>
                </div>
            </section>
            <section id="people" className="max-w-7xl mx-auto px-6 py-10 pb-32">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    
                    {batches[batchNumber - 1].participants.map((p, index) => (
                        <ProfileCard key={index} imgSrc={p.img} name={p.name} role={p.role} />
                    ))} 
                        
                </div>
            </section>        
        </div>
    );
}