import Icon from "../ui/Icon";

/* How to Use:
<AboutCard>
    <AboutCard.Icon><svg>...</svg></AboutCard.Icon>
    <AboutCard.Title>Title Here</AboutCard.Title>
    <AboutCard.Description>Description here</AboutCard.Description>
</AboutCard>
*/

export default function AboutCard({children}) {
    return (
            <div className="reveal-card opacity-0 translate-y-10 transition-all duration-700 delay-100 group relative p-px rounded-2xl bg-linear-to-b from-white/10 to-transparent">
                <div className="bg-slate-900 rounded-[calc(1rem-1px)] p-10 h-full transition-all duration-500 group-hover:bg-slate-800/80 group-hover:-translate-y-2">
+                    {children}
                </div>
            </div>
    );
}

function Title ({ children }) {
    return (
        <h3 className="font-bold text-2xl mb-4 text-white">{children}</h3>
    );
}

function Description({ children }) {
    return (
        <p className="text-slate-400 leading-relaxed font-light">
            {children}
        </p>
    );
}
AboutCard.Icon = Icon;
AboutCard.Title = Title;
AboutCard.Description = Description;