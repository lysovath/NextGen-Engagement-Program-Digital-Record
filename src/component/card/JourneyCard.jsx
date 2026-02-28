import List from "../ui/List";

export default function JourneyCard({ cardNumber, title, duration, list = [] }) {
    const color = cardNumber % 2 === 0 ? "bg-orange-500 text-white" : "bg-[#0a192f] text-orange-500";

    return (
        <div className="reveal-journey opacity-0 translate-y-12 transition-all duration-700 delay-100 group relative bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-4">
            <div className={`absolute -top-5 left-10 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl border-2 border-orange-500 ${color}`}>
                {cardNumber}
            </div>
            <h3 className="text-2xl font-bold text-[#0a192f] mb-2 mt-2 leading-tight">{title}</h3>
            <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                Duration: {duration}
            </div>
            <List>
                {(Array.isArray(list) ? list : []).map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                ))}
            </List>
        
        </div>
    );
}