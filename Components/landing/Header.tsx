
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b56ea2796_528127095_17952814013998293_7170800522428397598_n.jpg"
              alt="Civil Logo"
              className="w-10 h-10 object-contain rounded-xl"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Civil
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Demo', 'About', 'Testimonials', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mb-4 overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {['Features', 'Demo', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button variant="outline" className="w-full border-amber-300 text-amber-700">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
