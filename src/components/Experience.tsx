import { BsLightbulb } from "react-icons/bs";
import { EXPERIENCES } from "../utils/contants";
import Separator from "./Separator";

const Experience = () => {
    return (
        <div className="flex flex-col pb-[15dvh]">
            <div className="flex flex-col gap-5">
                <h1
                    id="work"
                    className="text-5xl text-white font-garamond max-w-4xl pt-[15dvh]"
                >
                    Experience
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl tracking-wide">
                    Transitioning from a different professional background, I
                    bring unique problem-solving perspectives and
                    adaptability—experiences that shaped how I approach
                    teamwork.
                </p>
            </div>

            <div className="mt-10">
                {EXPERIENCES.map((experience, index) => (
                    <div key={experience.company} className="flex flex-col">
                        <div className="grid grid-cols-12 gap-5 relative items-start">
                            {/* Kiri: Role, Company, & Year */}
                            <div className="col-span-4 sticky top-[15dvh] flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl font-garamond text-white">
                                        {experience.company}
                                    </h2>
                                    <span className="text-base text-[#FACC14]">
                                        {experience.role}
                                    </span>
                                    <div className="text-neutral-400 text-sm">
                                        {experience.startDate} &mdash;{" "}
                                        {experience.endDate}
                                    </div>
                                </div>
                            </div>

                            {/* Kanan: Responsibilities & Reflection */}
                            <div className="col-span-8 flex flex-col gap-5">
                                <ul className="flex flex-col gap-2 text-neutral-400">
                                    {experience.responsibilities.map(
                                        (responsibility) => (
                                            <li
                                                key={responsibility}
                                                className="relative pl-5 text-lg tracking-wide before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:bg-[#FACC14]"
                                            >
                                                {responsibility}
                                            </li>
                                        ),
                                    )}
                                </ul>

                                <div className="flex gap-3 items-start border border-neutral-700 bg-neutral-800/70 p-5">
                                    <div className="pt-1 shrink-0">
                                        <BsLightbulb
                                            color="#FACC14"
                                            size={16}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h2 className="uppercase text-base font-semibold tracking-wider text-[#FACC14]">
                                            Reflection
                                        </h2>
                                        <p className="text-base tracking-wide text-neutral-400">
                                            {experience.reflection}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Separator antar experience dengan jarak lebar */}
                        {index < EXPERIENCES.length - 1 && (
                            <Separator className="my-20" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
