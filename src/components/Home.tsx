import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import paysage9 from '../assets/img/paysage9.jpg';

const Home: React.FC = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // L'animation se déclenchera dès que l'utilisateur arrive sur la page
        setHasAnimated(true);
    }, []);

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 1.2, x: "-10%" },
        visible: {
            opacity: 1,
            scale: 1,
            x: "0%",
            transition: {
                duration: 2,
                ease: 'easeInOut',
                when: "beforeChildren",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"} // Utiliser l'état pour déclencher l'animation au montage
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
                <motion.p
                    variants={textVariant}
                    className="text-xl text-dark"
                >
                    Spaces that reflect your life
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Home;
