import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const location = useLocation();

  const pageTransition = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
