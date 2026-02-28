

export default function Icon({ children }) {
    return (
        <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/20 flex-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-inner">
            {children}
        </div>
    );
}