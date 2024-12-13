import React from "react";
import {FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa";


function Intro() {

    return (
        // Intro container
        <div className="max-w-5xl mx-auto h-[65vh] bg-slate-800 flex flex-col items-start justify-center gap-8 py-10">
            <h1 className="text-2xl text-zinc-300"> Sup! I'm </h1>

            <h1 className="text-7xl sm:text-3xl text-[rgb(221,160,50)] font-semibold">
                JOSH BENNETT
            </h1>

            <h1 className="text-5xl sm:text-3xl text-[rgb(120,175,159)] font-semibold">
                A full stack developer
            </h1>
            <p className="text-xl sm:text-lg text-zinc-300 w-2/3 sm:w-full">
                A Geotechnical Engineer turned Software Developer. I love building things and
                solving problems. I'm passionate about learning new technologies and building cool
                stuff.
            </p>

            <div>
                {/* CV download link */}
                <a href="/CV-JoshuaBennett.pdf" download="CV-JoshuaBennett.pdf">
                    <button
                        className="text-slate-400 border-2 border-[rgb(124,79,51)] hover:border-secondary px-1.5 py-1 rounded-full">
                        CV
                    </button>
                </a>


                <button className="px-5 align-middle ">
                    <a href="https://github.com/SkimJazz">
                        {" "}
                        <FaGithub className="text-slate-400  hover:text-zinc-300 text-xl"/>
                    </a>
                </button>

                <button className="px-5 align-middle">
                    <a href="http://www.linkedin.com/in/joshua-bennett-38218bb3">
                        {" "}
                        <FaLinkedin className="text-slate-400 hover:text-zinc-300 text-xl"/>
                    </a>

                </button>

                <a href="mailto:jb.skimjazz@outlook.com">
                    <button className="px-5 align-middle">
                        <FaMailBulk className="text-slate-400 hover:text-zinc-300 text-xl"/>
                    </button>
                </a>

            </div>

        </div>
    );
}

export default Intro;