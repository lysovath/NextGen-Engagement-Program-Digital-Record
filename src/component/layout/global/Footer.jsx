import List from "../../ui/List";
import { Link } from "react-router-dom";
import useScrollTo from "../../../hooks/useScrollTo";

export default function Footer(){
    const scrollTo = useScrollTo();
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold italic">N</div>
                            <span className="text-white font-bold text-xl tracking-tight">extGen Engagement Program</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Empowering the next generation of innovators through specialized engagement and hands-on training.
                        </p>
                    
                    </div>

                    <div>
                        <h4 className="text-orange-500 font-bold mb-6 uppercase text-xs tracking-widest">The Batches</h4>
                        <List>
                            <List.Item icon={null}><Link to="/batch1" className="hover:text-orange-500 transition-colors text-slate-400">Batch I - Pioneers</Link></List.Item>
                            <List.Item icon={null}><Link to="/batch2" className="hover:text-orange-500 transition-colors text-slate-400">Batch II - Builders</Link></List.Item>
                            <List.Item icon={null}><Link to="/batch3" className="hover:text-orange-500 transition-colors text-slate-400">Batch III - Visionaries</Link></List.Item>
                        </List>
                    </div>

                    <div>
                        <h4 className="text-orange-500 font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
                        <List>
                            <List.Item icon={null}><a className="hover:text-orange-500 transition-colors text-slate-400" onClick={() => scrollTo("people")}>Meet Our People</a></List.Item>
                            <List.Item icon={null}><a className="hover:text-orange-500 transition-colors text-slate-400" onClick={() => scrollTo("journey")}>Program Timeline</a></List.Item>
                            <List.Item icon={null}><a className="hover:text-orange-500 transition-colors text-slate-400" onClick={() => scrollTo("gallery")}>Traning & Reflections</a></List.Item>
                        </List>
                    </div>

                    <div>
                        <h4 className="text-orange-500 font-bold mb-5 uppercase text-xs tracking-widest">Our Social Media</h4>
                        <p className="text-xs mb-4">Stay updated with our latest batch milestones.</p>

                        <div className="flex gap-4 mb-5">
                            <a href="https://www.facebook.com/share/1MzosRcYdr/?mibextid=wwXIfr" target="_blank" 
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/10">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z"/></svg>
                            </a>
                            <a href="https://www.tiktok.com/@ng_engagement_batch_3?_r=1&_t=ZS-92hu0KK5GDM" target="_blank" 
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/10">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8.1c-1.6 0-3.2-.5-4.5-1.5v8.7c0 3.8-3.1 6.7-6.9 6.7S2.7 19.1 2.7 15.3s3.1-6.9 6.9-6.9c.4 0 .8 0 1.2.1v3.6c-.4-.1-.8-.2-1.2-.2-1.9 0-3.4 1.6-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4V2.7h3.5c.3 2.4 2.3 4.3 4.7 4.4v1z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">
                        &copy; 2026 NextGen Engagement Program. Crafted with Passion.
                    </p>
                    <div className="flex gap-6 text-xs font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}