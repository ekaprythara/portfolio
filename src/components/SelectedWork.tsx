import { BsArrowUpRight } from "react-icons/bs";
import { SELECTED_WORKS } from "../utils/contants";
import Separator from "./Separator";

const SelectedWork = () => {
    return (
        <div className="py-24 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl text-white font-garamond max-w-4xl">
                    Selected Works
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl tracking-wide">
                    Projects that challenged how I think, collaborate, and
                    build. More case studies coming as I document past work.
                </p>
            </div>

            {SELECTED_WORKS.map((work) => (
                <div
                    className="grid grid-cols-12 gap-5 relative items-start"
                    key={work.title}
                >
                    {/* Kiri */}
                    <div className="col-span-4 sticky top-[20dvh] flex flex-col gap-4">
                        {/* Judul & Role */}
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-garamond text-white">
                                {work.title}
                            </h2>
                            <span className="text-base text-[#FACC14]">
                                {`${work.role} • ${work.year}`}
                            </span>
                        </div>

                        {/* Tech Stacks */}
                        <div className="flex flex-row flex-wrap gap-2">
                            {work.techStacks.map((tech, index) => (
                                <div
                                    key={index}
                                    className="py-1 px-2.5 bg-neutral-800 tracking-wider text-center text-xs border border-neutral-700 text-neutral-300 rounded-full w-fit"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-4 pt-2">
                            {work.demoUrl !== "#" && (
                                <a
                                    href={work.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row gap-1.5 items-center text-sm text-neutral-300 hover:text-white transition-colors"
                                >
                                    View Live Demo <BsArrowUpRight size={12} />
                                </a>
                            )}
                            {work.sourceUrl !== "#" && (
                                <a
                                    href={work.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row gap-1.5 items-center text-sm text-neutral-300 hover:text-white transition-colors"
                                >
                                    View Source <BsArrowUpRight size={12} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Kanan */}
                    <div className="col-span-8 flex flex-col gap-10">
                        <img
                            src={work.image}
                            alt={`Image of ${work.title}`}
                            className="rounded-lg object-cover aspect-video"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm font-bold tracking-widest uppercase text-[#FACC14]">
                                    Situation & Role
                                </h2>
                                <p className="text-base tracking-wide text-neutral-400">
                                    {work.situation}
                                </p>
                            </div>
                            {/* Challenges & Decision */}
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm font-bold tracking-widest uppercase text-[#FACC14]">
                                    Challenges & Decision
                                </h2>
                                <p className="text-base tracking-wide text-neutral-400">
                                    {work.challenges}
                                </p>
                            </div>
                            {/* Garis Pemisah (Full 2 Kolom) */}
                            <Separator className="col-span-2 my-5" />
                            {/* Outcome (Full 2 Kolom) */}
                            <div className="flex flex-col gap-2 col-span-2">
                                <h2 className="text-sm font-bold tracking-widest uppercase text-[#FACC14]">
                                    Outcome
                                </h2>
                                <p className="text-base tracking-wide text-neutral-400">
                                    {work.outcome}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectedWork;
