import { Link } from "react-router-dom";

export default function PeopleCard({title, children, batchNumber, linkTo}) {
    return (
        <Link to={linkTo} className="reveal-people opacity-0 translate-y-12 transition-all duration-700 delay-100 group block relative bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-2xl p-10 hover:border-orange-500/40 hover:bg-slate-900/60">
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                    <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
                    <span className="text-orange-500 font-mono text-sm opacity-40">{batchNumber}</span>
                </div >
                {children}
                <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest">
                    <span className="hover:underline hover:text-orange-500">View Profiles</span>
                    <svg className="w-4 h-4 text-orange-500 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            </div>
        </Link>
    );
}
function description({ children }) {
    return (
        <p className="text-slate-400 font-light leading-relaxed mb-12 grow">{children}</p>
    );
}
PeopleCard.Description = description;