import React, { useState } from 'react';
import SectionTitle from "../components/SectionTitle.jsx";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { educationData, experienceData } from "../resources/resume.js";


// Education Card
const EdCard = ({ title, uni, period, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-2 border-[rgb(62,73,85)] rounded-lg p-6 mb-4 bg-tertiary/10">
            {/*<div className="flex justify-between items-center text-xl text-zinc-300 cursor-pointer" onClick={toggleCard}>*/}
            {/*    {title}*/}
            {/*    {isOpen ? <FaMinus className="text-tertiary"/> : <FaPlus className="text-tertiary" />}*/}
            {/*</div>*/}

            <div className="flex justify-between items-center text-xl text-zinc-300 cursor-pointer"
                 onClick={toggleCard}>
                <div className="flex justify-between w-full">
                    <span>{title}</span>
                    <span className="text-[rgb(101,156,200)] text-base font-semibold tracking-wider pr-6 sm:hidden ">{period}</span>
                </div>
                {isOpen ? <FaMinus className="text-tertiary"/> : <FaPlus className="text-tertiary"/>}
            </div>
            {isOpen && (
                <>
                    <h3 className="text-secondary pb-6 sm:pb-0">{uni}</h3>
                    <h2 className="text-[rgb(101,156,200)] py-4 lg:hidden sm:inline ">{period}</h2>
                    <p className="text-zinc-300 sm:pt-8">
                        {description}
                    </p>
                </>
            )}
        </div>
    );
};


// Experience Card
const ExCard = ({title, company, period, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-2 border-[rgb(62,73,85)] rounded-lg p-6 mb-4 bg-tertiary/10">
            {/*<div className="flex justify-between items-center text-xl text-zinc-300 cursor-pointer"*/}
            {/*     onClick={toggleCard}>*/}
            {/*    {title}*/}
            {/*    {isOpen ? <FaMinus className="text-tertiary"/> : <FaPlus className="text-tertiary"/>}*/}
            {/*</div>*/}

            <div className="flex justify-between items-center text-xl text-zinc-300 cursor-pointer"
                 onClick={toggleCard}>
                <div className="flex justify-between w-full">
                    <span>{title}</span>
                    <span className="text-[rgb(101,156,200)] text-base font-semibold tracking-wider pr-6 sm:hidden ">{period}</span>
                </div>
                {isOpen ? <FaMinus className="text-tertiary"/> : <FaPlus className="text-tertiary"/>}
            </div>

            {isOpen && (
                <>
                    <h3 className="text-secondary pb-6 sm:pb-0">{company}</h3>
                    <h2 className="text-[rgb(101,156,200)] py-4 lg:hidden sm:inline">{period}</h2>
                    <p className="text-zinc-300 sm:pt-8">
                        {description}
                    </p>
                </>
            )}
        </div>
    );
};


const Resume = () => {

    return (
        <div className="pt-40 max-w-5xl mx-auto">
            <SectionTitle title="RESUME"/>

            <div className="flex flex-col items-center gap-5 sm:grid sm:grid-cols-1 py-10 ">
                {/* Child container-1 Education */}
                <div className="w-5/6 sm:w-full">
                    <h2 className="text-3xl text-secondary text-center py-8">Education</h2>
                    <div className="max-w-5xl">
                        {educationData.map((edu, index) => (
                            <EdCard key={index}
                                    title={edu.title}
                                    uni={edu.uni}
                                    period={edu.period}
                                    description={edu.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Child container-2 Experience */}
                <div className="w-5/6 sm:w-full">
                    <h2 className="text-3xl text-secondary  text-center py-8">Experience</h2>
                    <div>
                        {experienceData.map((exp, index) => (
                            <ExCard key={index}
                                    title={exp.title}
                                    company={exp.company}
                                    period={exp.period}
                                    description={exp.description}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;