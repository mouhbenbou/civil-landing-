import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Small Business Owner, São Paulo",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    content: "Civil helped me understand my lease agreement and know my rights as a tenant. I couldn't afford a lawyer, but Civil gave me the confidence to negotiate with my landlord.",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    role: "Worker, Cairo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    content: "When my employer wasn't paying overtime, I used Civil to understand my labor rights. The AI explained everything clearly and helped me take action.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Single Mother, Mumbai", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    content: "Civil helped me navigate family law questions during my divorce. Having legal guidance in my own language made all the difference when I couldn't afford an attorney.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-32 px-4 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200 mb-4">
            💬 Real Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Empowering People
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Civil is helping people get the legal guidance they need, 
            regardless of their economic situation or location.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50/50 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-amber-400 group-hover:text-amber-500 transition-colors duration-300" />
                    <div className="flex space-x-1">
                      {Array.from({length: testimonial.rating}).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
