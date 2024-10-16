import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
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
            className="p-6 bg-secondary text-dark font-poppins"
        >
            <motion.h2
                variants={textVariant}
                className="text-3xl mb-4 font-lora text-darker"
            >
                Bienvenue chez Ombra Studio
            </motion.h2>
            <motion.p
                variants={textVariant}
                className="text-lg"
            >
                Des espaces qui reflètent votre style
            </motion.p>
            <motion.div
                variants={imageVariant}
                className="mt-8 p-4 bg-logo-bk bg-cover bg-center h-64 w-full"
            >
                {/* Image de logo en background */}
            </motion.div>
        </motion.div>
    );
};

export default Home;
