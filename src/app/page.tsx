"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main>
        <section className="py-20 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ola Digital Health API Documentation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#api"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Explore API
            </a>
          </motion.div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8 fixed bottom-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} OlaDigital Health Docs. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
