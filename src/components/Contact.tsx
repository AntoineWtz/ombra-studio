import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import paysage5 from '../assets/img/paysage5.jpg';
import portrait7 from '../assets/img/portrait7.jpg';

const Contact: React.FC = () => {
    // Variantes d'animation
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const formVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', staggerChildren: 0.2 } },
    };

    const borderVariant = {
        hidden: { opacity: 0, width: '0%' },
        visible: { opacity: 1, width: '3px', transition: { duration: 3, ease: 'easeOut' } },
    };

    const buttonVariant = {
        hover: {
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.1 },
        },
        tap: {
            scale: 0.95,
            backgroundColor: "#1c1c1c",
            transition: { duration: 0.1 },
        },
    };

    const sectionVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
    };

    const navigate = useNavigate();
    const handleAboutRedirect = () => navigate('/about');

    return (
        <div>

            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 lg:p-16 bg-secondary text-dark font-poppins min-h-screen gap-12"
            >
                {/* Colonne du formulaire avec la bordure */}
                <motion.div className="relative w-full lg:w-2/3 space-y-8 flex flex-col">
                    <motion.div
                        variants={borderVariant}
                        initial="hidden"
                        animate="visible"
                        className="absolute top-0 right-10 h-full bg-primary"
                    />
                    <motion.h2
                        variants={textVariant}
                        className="text-4xl mb-8 font-lora text-darker text-center"
                    >
                        Get in Touch
                    </motion.h2>

                    <motion.form
                        variants={formVariant}
                        className="grid grid-cols-1 gap-6 w-full md:w-2/3 mx-auto"
                    >
                        <motion.input
                            variants={formVariant}
                            type="text"
                            placeholder="First Name"
                            className="p-4 bg-white text-dark border-b-2 border-gray-300 outline-none rounded-xl focus:border-primary"
                        />
                        <motion.input
                            variants={formVariant}
                            type="text"
                            placeholder="Last Name"
                            className="p-4 bg-white text-dark border-b-2 border-gray-300 outline-none rounded-xl focus:border-primary"
                        />
                        <motion.input
                            variants={formVariant}
                            type="email"
                            placeholder="Email"
                            className="p-4 bg-white text-dark border-b-2 border-gray-300 outline-none rounded-xl focus:border-primary"
                        />
                        <motion.input
                            variants={formVariant}
                            type="tel"
                            placeholder="Phone"
                            className="p-4 bg-white text-dark border-b-2 border-gray-300 outline-none rounded-xl focus:border-primary"
                        />
                        <motion.textarea
                            variants={formVariant}
                            placeholder="Your Message"
                            className="p-4 h-32 bg-white text-dark border-b-2 border-gray-300 outline-none rounded-xl focus:border-primary resize-none"
                        />
                        <motion.button
                            variants={buttonVariant}
                            whileHover="hover"
                            whileTap="tap"
                            type="submit"
                            className="md:w-1/3 mx-auto bg-primary text-white py-3 px-8 rounded-xl hover:bg-darker transition-transform duration-300"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </motion.div>

                {/* Colonne des coordonnées */}
                <motion.div
                    variants={textVariant}
                    className="w-full lg:w-1/3 flex flex-col items-start space-y-6"
                >
                    <motion.h3
                        variants={textVariant}
                        className="text-3xl mb-6 font-lora text-darker"
                    >
                        Contact Information
                    </motion.h3>

                    <motion.p variants={textVariant} className="text-lg mb-4">
                        Ombra Studio<br />
                        1234 Sunset Boulevard<br />
                        New York, NY 10001<br />
                        USA
                    </motion.p>

                    <motion.p variants={textVariant} className="text-lg">
                        Phone: +1 (555) 123-4567
                    </motion.p>

                    <motion.p variants={textVariant} className="text-lg">
                        Email: info@ombrastudio.com
                    </motion.p>

                    <motion.div
                        variants={imageVariant}
                        className="w-full mt-8"
                    >
                        <img src={paysage5} alt="Ombra Studio Office" className="w-full object-cover rounded-3xl shadow-lg" />
                    </motion.div>
                </motion.div>
            </motion.div>
            {/* Section About */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={sectionVariant}
                className="py-24 px-8 bg-white flex flex-col lg:flex-row items-center text-center lg:text-right lg:justify-between"
            >
                <div className="lg:w-1/2 lg:pr-8 lg:text-right">
                    <h3 className="text-4xl font-lora text-darker mb-6">Discover Our Story</h3>
                    <p className="text-xl text-dark mb-8">
                        Dive into the story behind Ombra Studio. Learn about our journey, our inspirations, and our commitment to creating spaces that mirror your life.
                    </p>
                    <motion.button
                        onClick={handleAboutRedirect}
                        className="bg-gradient-to-r from-accent to-primary text-xl text-dark px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110 relative overflow-hidden"
                        whileHover={{ backgroundPosition: '100% 0', rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundSize: '200% 100%', transition: 'background-position 0.5s ease-in-out' }}
                    >
                        Learn More About Us
                    </motion.button>
                </div>
                <motion.img
                    src={portrait7}
                    alt="About us"
                    className="lg:w-1/2 h-96 object-cover rounded-lg shadow-lg mt-8 lg:mt-0"
                    variants={imageVariant}
                />
            </motion.section>
        </div>
    );
};

export default Contact;
