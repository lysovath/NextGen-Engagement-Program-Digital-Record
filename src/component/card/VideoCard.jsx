
export default function VideoCard({
  src,
  type = "video/mp4",
  label,
  title,
  description,
  duration,
  delay = 100,
}) {
  return (
    <div
      className={`
        group reveal-gallery
        opacity-0 translate-y-12
        transition-all duration-1000
        delay-${delay}
      `}
    >
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl">
        <video
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          controls
        >
          <source src={src} type={type} />
        </video>

          <div className="absolute top-4 left-4 bg-orange-600 text-[10px] font-black px-2 py-1 rounded text-white tracking-tighter uppercase">
            {label}
          </div>
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h4 className="text-orange-500 text-xl font-bold">
            {title}
          </h4>
            <p className="text-slate-500 text-sm mt-1">
              {description}
            </p>
        </div>
          <span className="text-orange-500 font-mono text-xs">
            {duration}
          </span>
      </div>
    </div>
  );
}