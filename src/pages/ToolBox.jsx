import React from 'react';
import SectionTitle from "../components/SectionTitle.jsx";
import { VscVscode } from "react-icons/vsc";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaHtml5,
    FaCss3,
    FaGit,
    FaGithub,
    FaLinux,
    FaDocker
} from "react-icons/fa";
import { 
    SiJavascript, 
    SiMongodb, 
    SiDjango, 
    SiFlask, 
    SiExpress, 
    SiSwagger, 
    SiPostgresql,
    SiTailwindcss,
    SiPytest,
    SiJest,
    SiTrello,
    SiPycharm,
    SiWebstorm,
    SiFigma,
    SiAffinitydesigner,
    SiAutodesk,
    SiCloudinary,
    SiRender,
    SiVite,
    SiVitest,
    SiInsomnia
} from "react-icons/si";


const ToolBox = () => {

    const skills = [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Python",
        "Django",
        "Flask",
        "Swagger UI",
        "PostgreSQL",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "PyTest",
        "Jest",
        "Trello",
        "Linux",
        "Git",
        "GitHub",
        "VS Code",
        "PyCharm",
        "WebStorm",
        "Figma",
        "Affinity Designer-2",
        "AutoCAD",
        "Render",
        "Docker",
        "Vite",
        "Vitest",
        "Insomnia"

    ];

    // Don't forget to add these Skills:
    // "SolidWorks",
    // "MATLAB",


    const skillIcons = {
        "JavaScript": <SiJavascript className="text-zinc-300 text-4xl"/>,
        "React": <FaReact className="text-zinc-300 text-4xl"/>,
        "Node.js": <FaNodeJs className="text-zinc-300 text-4xl"/>,
        "Express.js": <SiExpress className="text-zinc-300 text-4xl"/>,
        "MongoDB": <SiMongodb className="text-zinc-300 text-4xl"/>,
        "Cloudinary": <SiCloudinary className="text-zinc-300 text-4xl"/>,
        "Python": <FaPython className="text-zinc-300 text-4xl"/>,
        "Django": <SiDjango className="text-zinc-300 text-4xl"/>,
        "Flask": <SiFlask className="text-zinc-300 text-4xl"/>,
        "Swagger UI": <SiSwagger className="text-zinc-300 text-4xl"/>,
        "PostgreSQL": <SiPostgresql className="text-zinc-300 text-4xl"/>,
        "HTML5": <FaHtml5 className="text-zinc-300 text-4xl"/>,
        "CSS3": <FaCss3 className="text-zinc-300 text-4xl"/>,
        "TailwindCSS": <SiTailwindcss className="text-zinc-300 text-4xl"/>,
        "PyTest": <SiPytest className="text-zinc-300 text-4xl"/>,
        "Jest": <SiJest className="text-zinc-300 text-4xl"/>,
        "Trello": <SiTrello className="text-zinc-300 text-4xl"/>,
        "Linux": <FaLinux className="text-zinc-300 text-4xl"/>,
        "Git": <FaGit className="text-zinc-300 text-4xl"/>,
        "GitHub": <FaGithub className="text-zinc-300 text-4xl"/>,
        "VS Code": <VscVscode className="text-zinc-300 text-4xl"/>,
        "PyCharm": <SiPycharm className="text-zinc-300 text-4xl"/>,
        "WebStorm": <SiWebstorm className="text-zinc-300 text-4xl"/>,
        "Figma": <SiFigma className="text-zinc-300 text-4xl"/>,
        "Affinity Designer-2": <SiAffinitydesigner className="text-zinc-300 text-4xl"/>,
        "AutoCAD": <SiAutodesk className="text-zinc-300 text-4xl"/>,
        "Render": <SiRender className="text-zinc-300 text-4xl"/>,
        "Docker": <FaDocker className="text-zinz-300 text-4xl" />,
        "Vite": <SiVite className="text-zinc-300 text-4xl"/>,
        "Vitest": <SiVitest className="text-zinc-300 text-4xl"/>,
        "Insomnia": <SiInsomnia className="text-zinc-300 text-4xl"/>
    };


    return (
        <div className="pt-40 max-w-5xl mx-auto">
            <SectionTitle title="TOOLBOX"/>

            <div className="flex gap-10 justify-center items-center py-10 px-56 sm:px-10">
                <p className="text-xl text-center text-zinc-300">
                    As I mentioned earlier, I love building things. So, in addition to my large
                    Kincrome toolbox in the shed, I also have a digital toolbox. Here
                    are some tools I use to build things on the web.
                </p>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 pt-20 sm:gap-5">
                {skills.map((skill, index) => (
                    <div key={index}
                         className="font-semibold border-b-2 border-zinc-500 py-4 px-0 flex justify-between items-center">
                        <h1 className="text-md text-zinc-300"> {skill} </h1>
                        {React.cloneElement(skillIcons[skill], {className: "text-tertiary text-4xl sm:text-xl"})}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default ToolBox;