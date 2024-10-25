import React from 'react';
import { motion } from 'framer-motion';
import paysage1 from '../assets/img/paysage1.jpg';
import paysage2 from '../assets/img/paysage2.jpg';
import paysage3 from '../assets/img/paysage3.jpg';
import paysage4 from '../assets/img/paysage4.jpg';

const About: React.FC = () => {
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="p-6 lg:p-24 bg-secondary text-dark font-poppins space-y-12"
        >
            <motion.h2
                variants={textVariant}
                className="text-3xl lg:text-4xl font-lora text-darker mb-6 lg:mb-8 text-center"
            >
                The Story of Ombra Studio
            </motion.h2>

            {/* Premier bloc : L'origine */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <motion.div
                    variants={imageVariant}
                    className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg"
                >
                    <img
                        src={paysage1}
                        alt="L'origine d'Ombra"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </motion.div>
                <motion.div
                    variants={textVariant}
                    className="lg:w-1/2 space-y-4 text-center lg:text-left"
                >
                    <h3 className="text-2xl lg:text-3xl font-lora text-darker">Our Beginnings</h3>
                    <p className="text-base lg:text-lg">
                        Ombra Studio was born from a shared vision: to blend the art of storytelling with the power of technology. It began as a conversation between two friends during a foggy dawn at the edge of the Mediterranean. Inspired by the way light interacts with shadows, they sought to create a studio that would bring stories to life through intricate web experiences and human-centered design.
                    </p>
                </motion.div>
            </div>

            {/* Deuxième bloc : L'évolution */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <motion.div
                    variants={textVariant}
                    className="lg:w-1/2 space-y-4 order-2 text-center lg:text-right lg:order-1"
                >
                    <h3 className="text-2xl lg:text-3xl font-lora text-darker">Our Growth</h3>
                    <p className="text-base lg:text-lg">
                        What started as a small team quickly evolved into a collective of creative minds, each bringing a unique set of skills. At Ombra, we believe that collaboration is key, and every member is both a teacher and a student. With each project, we learned, adapted, and transformed – just like the shadows that shift with the sun. Our work has grown to represent diverse voices, each contributing to the story we tell.
                    </p>
                </motion.div>
                <motion.div
                    variants={imageVariant}
                    className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg order-1 lg:order-2"
                >
                    <img
                        src={paysage3}
                        alt="Croissance de l'équipe"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </motion.div>
            </div>

            {/* Troisième bloc : La mission */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <motion.div
                    variants={imageVariant}
                    className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg"
                >
                    <img
                        src={paysage2}
                        alt="Mission de Ombra"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </motion.div>
                <motion.div
                    variants={textVariant}
                    className="lg:w-1/2 space-y-4 text-center lg:text-left"
                >
                    <h3 className="text-2xl lg:text-3xl font-lora text-darker">Our Mission</h3>
                    <p className="text-base lg:text-lg">
                        At Ombra Studio, we are committed to crafting digital experiences that transcend mere functionality. Our mission is to use the digital world to enhance the real one, building environments that inspire, connect, and empower. We strive to leave a lasting impact, ensuring that every project carries the values of authenticity and empathy at its core.
                    </p>
                </motion.div>
            </div>

            {/* Quatrième bloc : La vision future */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <motion.div
                    variants={textVariant}
                    className="lg:w-1/2 space-y-4 order-2 text-center lg:text-right lg:order-1"
                >
                    <h3 className="text-2xl lg:text-3xl font-lora text-darker">Our Future</h3>
                    <p className="text-base lg:text-lg">
                        As Ombra Studio moves forward, we continue to push the boundaries of what's possible, always with an eye on emerging technologies and timeless storytelling. We are excited for what the future holds, and are dedicated to evolving alongside our clients to bring their visions into focus, blending the artistry of design with the science of functionality.
                    </p>
                </motion.div>
                <motion.div
                    variants={imageVariant}
                    className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg order-1 lg:order-2"
                >
                    <img
                        src={paysage4}
                        alt="Future de Ombra"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
