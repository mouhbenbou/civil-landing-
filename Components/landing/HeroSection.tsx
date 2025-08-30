import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 grid grid-cols-4 gap-2">
          {Array.from({length: 16}).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-amber-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-40 left-20 w-24 h-24 grid grid-cols-3 gap-2">
          {Array.from({length: 9}).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-orange-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.15,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-20">
        {/* Text Content */}
        <motion.div
          style={{ y, opacity }}
          className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200">
              ⚖️ AI Legal Companion App
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl lg:text-7xl font-black mb-6"
          >
            <span className="block text-gray-900 leading-tight">YOUR</span>
            <span className="block text-gray-900 leading-tight">LEGAL</span>
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent leading-tight">
              COMPANION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl lg:text-2xl text-amber-600 mb-4 font-semibold leading-relaxed max-w-2xl"
          >
            Accessible Legal Help for Everyone
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg lg:text-xl text-gray-600 mb-8 font-medium max-w-2xl"
          >
            5.1 billion people live without access to affordable, trustworthy legal advice
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl"
          >
            Get instant AI-powered legal information through voice or text. Ask about contracts, 
            landlord disputes, rights, and more. Justice shouldn't be exclusive to elites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              See Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-sm"
            />
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-12 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-15 blur-sm"
            />

            {/* Phone Container */}
            <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                
                {/* Content */}
                <div className="h-full bg-gradient-to-b from-amber-100 via-orange-50 to-amber-50 flex items-center justify-center p-8">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/civil-logo-full-color-black-text.png"
                    alt="Civil Legal Platform Logo"
                    className="w-full h-full object-contain rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-amber-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
