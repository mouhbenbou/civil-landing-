import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Mic, Globe, Shield, FileText, Users, Zap, Heart } from "lucide-react"; // Updated imports for new icons
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Legal Assistant",
    description: "Get instant answers to legal questions through natural conversation. Ask about contracts, rights, disputes, and more.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Mic,
    title: "Voice & Text Chat",
    description: "Communicate naturally through voice messages or text. Our AI understands context and provides personalized responses.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Designed for underserved communities worldwide. Available in multiple languages with local legal context.",
    color: "from-amber-600 to-yellow-500"
  },
  {
    icon: Shield,
    title: "Legal Information",
    description: "Access reliable legal information on housing, work, contracts, family law, and civil rights issues.",
    color: "from-orange-400 to-amber-500"
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Upload contracts, leases, or legal documents for AI-powered analysis and plain-language explanations.",
    color: "from-yellow-500 to-orange-400"
  },
  {
    icon: Users,
    title: "Case History",
    description: "Save important conversations and build a personal legal knowledge base for future reference.",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Get immediate legal guidance without waiting for appointments or paying expensive consultation fees.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Heart,
    title: "Empowering Justice",
    description: "Breaking down barriers to legal knowledge. Justice and legal power shouldn't be exclusive to elites.",
    color: "from-orange-600 to-amber-500"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-20 lg:py-32 px-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200 mb-4">
            🤖 AI-Powered Features
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Legal Help for
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Breaking down barriers to legal knowledge with AI-powered assistance. 
            Get the legal help you deserve, when you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${feature.color} rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
