import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Scale, 
  Gavel, 
  Shield, 
  Users, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import DemoSection from "../components/landing/DemoSection";
import AboutSection from "../components/landing/AboutSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
