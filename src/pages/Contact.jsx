import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from "../components/SectionTitle.jsx";
import { FaLocationArrow, FaMailBulk } from "react-icons/fa";


const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_rpznmhh', 'template_2wvj77g', form.current, 'FjehIzu4VTCwb1hWU')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormData({
                        from_name: '',
                        from_email: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="pt-40 max-w-5xl mx-auto">
            <SectionTitle title="CONTACT"/>

            {/* Parent Container */}
            <div className="flex pt-20 sm:pt-10 sm:flex-col sm:justify-center gap-5">

                {/*Contact Text -> Child container-1 */}
                <div className="flex flex-col w-3/4 sm:w-full sm:pb-10">

                    {/* Intro text -> Child container-1.1 */}
                    <div>
                        <p className="text-lg text-zinc-300 w-11/12 sm:w-full">
                            I'm always up for a chat, whether it's about your next big dev project or
                            just a yarn about a car or bike I would love to work on. Drop me an email
                            or message and let's get things rolling!
                        </p>
                    </div>

                    {/* Information details -> Child container-1.2 */}
                    <div className="flex flex-col pt-10 gap-6">

                        {/* Email details -> Child container-1.2.1 */}
                        <div className="inline-flex items-center text-zinc-300 space-x-4 ">
                            <a href="mailto:jb.skimjazz@outlook.com">
                                <FaMailBulk name="email" className="text-tertiary text-xl "/>
                            </a>
                            <span> jb.skimjazz@outlook.com</span>
                        </div>

                        {/* Location details -> Child container-1.2.2 */}
                        <div className="inline-flex items-center text-zinc-300 space-x-4 ">
                            <FaLocationArrow name="location" className="text-tertiary text-xl "/>
                            <span>Queensland, Australia</span>
                        </div>
                    </div>

                </div>


                {/* Contact Form -> Child container-2 */}
                <div className="w-3/4 bg-tertiary/10 p-6 rounded-lg border-2 border-[rgb(62,73,85)] sm:w-full ">

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 ">

                        {/* User input name -> Child container-2.1 */}
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="name"
                                name="from_name"
                                value={formData.name}
                                onChange={handleChange}
                                className="p-2 border-2 border-[rgb(62,73,85)] w-full rounded-lg px-4
                                           py-2 outline-none focus:ring-2 focus:ring-[rgb(124,79,51)]
                                           bg-primary text-zinc-200"
                                required
                            />
                        </div>

                        {/* User input email -> Child container-2.2 */}
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                id="email"
                                name="from_email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-2 border-2 border-[rgb(62,73,85)] w-full rounded-lg px-4
                                           py-2 outline-none focus:ring-2 focus:ring-[rgb(124,79,51)]
                                           bg-primary text-zinc-200"
                                required
                            />
                        </div>

                        {/* User input message -> Child container-2.3 */}
                        <div>

                            <textarea
                                id="message"
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border-2 border-[rgb(62,73,85)] rounded-lg w-full p-2 px-4
                                           py-2 outline-none focus:ring-2 focus:ring-[rgb(124,79,51)]
                                           bg-primary text-zinc-200"
                                rows="10"
                                required
                            />
                        </div>

                        <button type="submit" className="text-zinc-400 text-sm uppercase border-2 border-[rgb(124,79,51)]
                                                        w-1/2 inline-block self-end p-1 rounded hover:border-secondary "
                        >
                            Send message
                        </button>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default Contact;