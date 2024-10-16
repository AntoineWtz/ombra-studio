import React from 'react';
import { motion } from 'framer-motion';

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
            className="p-6 bg-secondary text-dark font-poppins"
        >
            <motion.h2
                variants={textVariant}
                className="text-3xl mb-4 font-lora text-darker"
            >
                À Propos de Nous
            </motion.h2>
            <motion.p
                variants={textVariant}
                className="text-lg"
            >
                Notre studio s'engage à transformer vos idées en réalité. Avec une approche centrée sur l'humain, nous nous efforçons de créer des environnements uniques et inspirants.
            </motion.p>
            <motion.div
                variants={imageVariant}
                className="mt-8 p-4 bg-about-bk bg-cover bg-center h-64 w-full"
            >
                {/* Image de fond sur About (tu peux personnaliser le background ici) */}
            </motion.div>
        </motion.div>
    );
};

export default About;
