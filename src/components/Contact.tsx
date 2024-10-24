import React from 'react';
import { motion } from 'framer-motion';
import paysage5 from '../assets/img/paysage5.jpg';

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

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
    };

    return (
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
    );
};

export default Contact;
