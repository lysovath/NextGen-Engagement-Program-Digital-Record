

export default function ProfileCard({imgSrc, name, role, socialLinks}){
    return (
        <div className="profile-card group flex flex-col items-center reveal-b1 opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden bg-slate-800">
                   <img src={imgSrc} alt={name} 
                        className="profile-img w-full h-full object-cover object-[50%_15%] transition-transform duration-500" />
                </div>
            </div>
            <div className="text-center">
                <h4 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">{name}</h4>
                <p className="text-sm text-slate-500 font-medium tracking-wide">{role}</p>
                

                {/*Add social media link later*/}
                {/* <div className="flex justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                        <span className="text-[10px]">in</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                        <span className="text-[10px]">web</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}