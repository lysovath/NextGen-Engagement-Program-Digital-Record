import PeopleCard from "../../card/PeopleCard";
import useRevealElment from "../../../hooks/useRevealElement";

export default function People(){
    useRevealElment("reveal-people", 0.2, ["opacity-0", "translate-y-10", "translate-y-12"], ["opacity-100", "translate-y-0"]);
    return (
        <section id="people" className="relative py-20 md:py-32 px-6 bg-[#0a0f1a] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 reveal-people opacity-0 translate-y-10 transition-all duration-1000">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-orange-500"></span>
                        <span className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em]">NextGen Engagement Program participants</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
                        Our <span className="text-orange-500">People</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                    This program stands as a shared memory of collaboration among organizers, lecturers, judges, and participants within the NextGen community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <PeopleCard title="The Pioneers" batchNumber="B1" linkTo="/batch/1">
                        <PeopleCard.Description>
                            <span className="text-orange-400">Batch-I</span> where ideas take root, curiosity grows, and the NextGen Engagement journey begins.
                        </PeopleCard.Description>
                    </PeopleCard>

                    <PeopleCard title="The Builders" batchNumber="B2" linkTo="/batch/2">
                        <PeopleCard.Description>
                            <span className="text-orange-400">Batch-II</span> a journey of CS mastery from hands-on training to the excitement of project showday.
                        </PeopleCard.Description>
                    </PeopleCard>

                    <PeopleCard title="The Visionaries" batchNumber="B3" linkTo="/batch/3">
                        <PeopleCard.Description>
                            Batch-III, live by the quote  <span className="text-orange-400"> " Batch 3 - 3 Departments".</span>
                        </PeopleCard.Description>
                    </PeopleCard>

                    </div>
                </div>
            </section>
    );
}