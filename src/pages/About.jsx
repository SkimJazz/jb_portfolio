import React from 'react';
import SectionTitle from "../components/SectionTitle.jsx";

const About = () => {

    return (

        // Parent div
        <div className="pt-20 max-w-5xl mx-auto">
            <SectionTitle title="ABOUT"/>

            {/* Child div-1 */}
            <div className="flex py-10 gap-20 sm:flex-col sm:gap-5">

                {/* Child div-2 -> About Profile image */}
                <div className="flex">
                    <img src="/jb.jpg" alt="Profile" className="size-70 sm:size-50 opacity-75 rounded-full object-cover filter grayscale mx-auto"/>
                </div>

                {/* Child div-3 -> About Text */}
                <div className="flex flex-col gap-5 w-2/3 text-lg sm:w-full">

                    <p className="text-zinc-300">
                        As an emerging software developer with a background in geotechnical
                        engineering, I bring a unique perspective to the world of technology.
                    </p>
                    <p className="text-zinc-300">
                        My passion for both all types of engineering and technology allows me to approach
                        problems with a creative and analytical mindset. I am constantly seeking new
                        challenges and opportunities to further my skills and make an impact in the
                        industry. Connect with me to learn more about my experience and work!
                    </p>
                </div>

            </div>

        </div>
    );
};

export default About;