import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import paysage9 from '../assets/img/paysage9.jpg';
import logo from '../assets/logo-ombra-studio-TR.png';
import portrait1 from '../assets/img/portrait1.jpg';
import portrait2 from '../assets/img/portrait2.jpg';
import portrait3 from '../assets/img/portrait3.jpg';
import portrait4 from '../assets/img/portrait4.jpg';
import portrait5 from '../assets/img/portrait5.jpg';
import portrait6 from '../assets/img/portrait6.jpg';
import portrait7 from '../assets/img/portrait7.jpg';
import portrait8 from '../assets/img/portrait8.jpg';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 1.2, x: "-10%" },
        visible: { opacity: 1, scale: 1, x: "0%", transition: { duration: 2, ease: 'easeInOut', when: "beforeChildren" } },
    };

    const navigate = useNavigate();

    const sectionVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const imageHover = {
        hover: { scale: 1.05, transition: { duration: 0.5 } },
    };

    const handleAboutRedirect = () => navigate('/about');
    const handleContactRedirect = () => navigate('/contact');

    return (
        <div>
            <motion.div
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                exit="hidden"
                className="relative h-screen w-full overflow-hidden"
            >
                <motion.img
                    variants={imageVariant}
                    src={paysage9}
                    alt="Paysage"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                <motion.div
                    variants={textVariant}
                    className="relative z-10 flex flex-col justify-center items-center h-full"
                >
                    <motion.h2
                        variants={textVariant}
                        className="text-5xl mb-4 font-lora text-darker drop-shadow-2xl"
                    >
                        Ombra Studio
                    </motion.h2>
                    <motion.h2
                        variants={textVariant}
                        className="text-xl text-dark"
                    >
                        Spaces that reflect your life
                    </motion.h2>
                    <img src={logo} alt="Ombra Studio Logo" className="h-32 absolute top-24" />
                </motion.div>
            </motion.div>

            {/* Section Mosaïque de Travaux Récents */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={sectionVariant}
                className="py-24 px-8 bg-light"
            >
                <h3 className="text-3xl font-lora text-center text-darker mb-8">Our Recent Works</h3>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {[portrait1, portrait2, portrait3, portrait4, portrait5, portrait6].map((image, index) => (
                        <motion.div
                            key={index}
                            whileHover="hover"
                            variants={imageHover}
                            className={`overflow-hidden rounded-lg shadow-lg ${index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1'}`}
                        >
                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Section About */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={sectionVariant}
                className="py-24 px-8 bg-secondary flex flex-col lg:flex-row items-center text-center lg:text-right lg:justify-between"
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

            {/* Section Contact */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={sectionVariant}
                className="py-24 px-8 bg-light flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between"
            >
                <motion.img
                    src={portrait8}
                    alt="Contact Us"
                    className="lg:w-1/2 h-96 object-cover rounded-lg shadow-lg mb-8 lg:mb-0"
                    variants={imageVariant}
                />
                <div className="lg:w-1/2 lg:pl-8">
                    <h3 className="text-4xl font-lora text-darker mb-6">Let's Connect</h3>
                    <p className="text-xl text-dark mb-8">
                        Ready to bring your vision to life? Reach out, and let's discuss how Ombra Studio can help create the perfect space for you.
                    </p>
                    <motion.button
                        onClick={handleContactRedirect}
                        className="bg-gradient-to-r from-accent to-primary text-xl text-dark px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110 relative overflow-hidden"
                        whileHover={{ backgroundPosition: '100% 0', rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundSize: '200% 100%', transition: 'background-position 0.5s ease-in-out' }}
                    >
                        Contact Us
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
