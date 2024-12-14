import React from 'react';
import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../resources/projects.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

    // React-Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="max-w-5xl mx-auto">
            <SectionTitle title="PROJECTS" />
            <div className="w-full m-auto">
                <div className="mt-20 sm:flex sm:justify-center">
                    <Slider {...settings} className="custom-dots custom-arrows sm:w-11/12">
                        {projects.map((project, index) => (
                            <div key={index} className="p-0">
                                <div className="relative flex flex-col items-start gap-4 p-4 border-2
                                                border-[rgb(62,73,85)] bg-tertiary/10 h-[450px] sm:h-[600px]
                                                text-zinc-300 rounded-lg md:flex-row ">

                                    <p className="text-secondary text-2xl">{project.title}</p>
                                    <p className="text-tertiary text-xl">{project.technologies}</p>
                                    <p className="text-[rgb(101,156,200)] text-lg">{project.description}</p>
                                    <p>{project.summary}</p>

                                    <button className="absolute bottom-4 right-4 text-[#8A98AE] text-sm
                                                       border-2 border-[rgb(124,79,51)] px-6 rounded-md
                                                       hover:border-secondary "
                                            onClick={() => window.open(project.githubLink, "_blank")}
                                    >
                                        View on Github
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;