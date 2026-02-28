
/* Provide the col and row control the span of the imge in the grid layout. Default is 1 for both. 
   Using the children prop, you can add overlay content
*/
const colSpanClass = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
};

const rowSpanClass = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
    3: "lg:row-span-3",
    4: "lg:row-span-4",
};

export default function GalleryImage({ src, alt = "", col = 1, row = 1, children }) {
    const colClass = colSpanClass[col];
    const rowClass = rowSpanClass[row];

    return (
            <div className={`reveal-gallery opacity-0 translate-y-8 transition-all duration-700 delay-100 group relative overflow-hidden rounded-2xl bg-slate-800 ${rowClass} ${colClass}`}>
                <img src={src} alt={alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
                {children}
            </div>
    )
}