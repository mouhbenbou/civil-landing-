import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Globe, Zap, Users } from "lucide-react"; // Added Zap and Users, removed TrendingUp as it's no longer used

const stats = [
  { icon: Globe, number: "5.1B", label: "People Without Legal Access" },
  { icon: Zap, number: "24/7", label: "AI Assistance" },
  { icon: Users, number: "Free", label: "3 Daily Queries" },
  { icon: Award, number: "Pro", label: "Unlimited Access" }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
      
      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(y, [0, -100], [0, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200 mb-6">
                ⚖️ Justice for All
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Democratizing
                <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Legal Access
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Law governs everything: housing, work, marriage, business, immigration, and human rights. 
                Yet lawyers are expensive, legal language is intimidating, and courts are often inaccessible. 
                Civil changes that.
              </p>
              
              <div className="space-y-4">
                {[
                  "Ask legal questions in plain language",
                  "Get instant AI-powered responses",
                  "Upload documents for analysis",
                  "Access your legal conversation history"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/20 text-center group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
