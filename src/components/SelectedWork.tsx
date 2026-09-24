import { BsArrowRightShort } from "react-icons/bs";
import { SELECTED_WORKS } from "../utils/contants";
import Separator from "./Separator";
import Link from "./ui/Link";

const SelectedWork = () => {
    return (
        <div className="flex flex-col pb-[15dvh]">
            <div className="flex flex-col gap-5">
                <h1
                    id="work"
                    className="text-5xl text-white font-garamond max-w-4xl pt-[15dvh]"
                >
                    Selected Works
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl tracking-wide">
                    A collection of self-driven projects and independent
                    explorations where I test new technologies, solve practical
                    problems, and sharpen my full-stack development skills.
                </p>
            </div>
            <div className="mt-10">
                {SELECTED_WORKS.map((work, index) => (
                    <div key={work.title} className="flex flex-col">
                        <div className="grid grid-cols-12 gap-5 relative items-start">
                            {/* Kiri */}
                            <div className="col-span-4 sticky top-[15dvh] flex flex-col gap-4">
                                {/* Judul & Role */}
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl font-garamond text-white">
                                        {work.title}
                                    </h2>
                                    <span className="text-base text-[#FACC14]">
                                        {work.role}
                                    </span>
                                </div>

                                {/* Tech Stacks */}
                                <div className="flex flex-row flex-wrap gap-2">
                                    {work.techStacks.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="py-1 px-2.5 bg-neutral-800/70 tracking-wider text-center text-xs border border-neutral-700 text-neutral-300 w-fit"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="flex items-center gap-8 pt-2">
                                    {work.demoUrl !== "#" && (
                                        <Link
                                            variant="ghost"
                                            href={work.demoUrl}
                                            className="flex gap-2"
                                        >
                                            View Live Demo
                                            <BsArrowRightShort size={25} />
                                        </Link>
                                    )}
                                    {work.sourceUrl !== "#" && (
                                        <Link
                                            variant="ghost"
                                            href={work.sourceUrl}
                                            className="flex gap-2"
                                        >
                                            Source
                                            <BsArrowRightShort size={25} />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Kanan */}
                            <div className="col-span-8 flex flex-col gap-10">
                                <div className="overflow-hidden aspect-video w-full">
                                    <img
                                        src={work.image}
                                        alt={`Image of ${work.title}`}
                                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                                    />
                                </div>

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

                        {/* Separator antar proyek dengan jarak lebar */}
                        {index < SELECTED_WORKS.length - 1 && (
                            <Separator className="my-20 col-span-12" />
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-[8dvh] flex items-center justify-center">
                <Link
                    href="#"
                    type="button"
                    variant="outline"
                    className="flex gap-2"
                >
                    View All Projects <BsArrowRightShort size={25} />
                </Link>
            </div>
        </div>
    );
};

export default SelectedWork;
