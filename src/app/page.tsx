"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconCode,
  IconRocket,
  IconBulb,
  IconUsers,
  IconArrowRight,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Home() {
  const navigationItems = [
    {
      title: "Services",
      icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#services",
    },
    {
      title: "About",
      icon: <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://instagram.com/josh.tmp",
    },
  ];

  const services = [
    {
      title: "Custom Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.",
      header: <ServiceImage src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop" alt="Web Development" />,
      icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Web Applications",
      description: "Custom web applications with advanced functionality, user authentication, and database integration.",
      header: <ServiceImage src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Web Applications" />,
      icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that convert visitors into customers and keep them engaged.",
      header: <ServiceImage src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop" alt="UI/UX Design" />,
      icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with expert SEO strategies tailored for the South African market.",
      header: <ServiceImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="SEO Digital Marketing" />,
      icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and analytics.",
      header: <ServiceImage src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop" alt="E-commerce Solutions" />,
      icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Consulting & Strategy",
      description: "Expert guidance on technology choices, digital transformation, and business growth strategies.",
      header: <ServiceImage src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Business Consulting" />,
      icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section with Spotlight */}
      <section className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased items-center justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 text-center">
                     <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl md:text-7xl font-bold text-transparent mb-6"
           >
             BusyOaks
           </motion.h1>
          
                     <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="mx-auto mt-4 max-w-2xl text-lg md:text-xl font-normal text-neutral-300 mb-8"
           >
             Professional web development and digital solutions for South African businesses. 
             Led by Joshua Malki, we turn your ideas into powerful web applications.
           </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Your Free Quote
              <IconArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-300">
              View Our Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-sm text-neutral-500 mb-4">Connect with Joshua:</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://instagram.com/josh.tmp" 
            target="_blank"
            rel="noopener noreferrer"
                className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
              >
                <IconBrandInstagram className="h-5 w-5 text-neutral-300" />
              </a>
                             <a 
                 href="mailto:joshmalki07@gmail.com" 
                 className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
               >
                 <IconMail className="h-5 w-5 text-neutral-300" />
               </a>
               <a 
                 href="tel:+27797384779" 
                 className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
               >
                 <IconPhone className="h-5 w-5 text-neutral-300" />
               </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Navigation */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <FloatingDock items={navigationItems} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Services
            </h2>
                         <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
               Comprehensive web development solutions to help your business thrive in the South African market
             </p>
          </motion.div>

          <BentoGrid>
            {services.map((service, i) => (
              <BentoGridItem
                key={i}
                title={service.title}
                description={service.description}
                header={service.header}
                icon={service.icon}
                className={service.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

            {/* Why Choose Me - Features Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Why Choose Me?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Professional web development with a personal touch, tailored for South African businesses
            </p>
          </motion.div>

          <WhyChooseMeFeatures />
        </div>
      </section>

      

      

            {/* CTA Section */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
          >
            Get a free consultation and quote for your next digital project. Let&apos;s build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project Today
              <IconArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="mailto:joshmalki07@gmail.com"
              className="px-8 py-4 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-all duration-300"
            >
              Get Free Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-neutral-400 text-sm">
              Follow Joshua on Instagram: 
              <a 
                href="https://instagram.com/josh.tmp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-blue-400 transition-colors ml-1"
              >
                @josh.tmp
              </a>
            </p>
          </motion.div>
        </div>
      </section>

            {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">BusyOaks</h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-md">
                  Professional web development and digital solutions for South African businesses. 
                  Led by Joshua Malki, creating modern web experiences that drive results.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/josh.tmp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-neutral-800 dark:bg-neutral-800 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <IconBrandInstagram className="h-6 w-6 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="mailto:joshmalki07@gmail.com"
                    className="group p-3 bg-neutral-800 dark:bg-neutral-800 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <IconMail className="h-6 w-6 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="tel:+27797384779"
                    className="group p-3 bg-neutral-800 dark:bg-neutral-800 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <IconPhone className="h-6 w-6 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                      Web Applications
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                      SEO & Marketing
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="mailto:joshmalki07@gmail.com" 
                      className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <IconMail className="h-4 w-4 mr-3 text-blue-400 group-hover:text-white transition-colors" />
                      joshmalki07@gmail.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+27797384779" 
                      className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <IconPhone className="h-4 w-4 mr-3 text-blue-400 group-hover:text-white transition-colors" />
                      079 738 4779
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://instagram.com/josh.tmp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <IconBrandInstagram className="h-4 w-4 mr-3 text-blue-400 group-hover:text-white transition-colors" />
                      @josh.tmp
                    </a>
                  </li>
                  <li className="text-neutral-300 flex items-center">
                    <span className="w-4 h-4 mr-3 flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    </span>
                    South Africa
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-neutral-700 dark:border-neutral-800 mt-16 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 text-sm">
                &copy; 2024 BusyOaks. All rights reserved.
              </p>
              <p className="text-neutral-400 text-sm mt-2 md:mt-0">
                Proudly built in South Africa
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}



const ServiceImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-xl group-hover/bento:scale-105 transition-transform duration-300"
      loading="lazy"
    />
  </div>
);

const WhyChooseMeFeatures = () => {
  const features = [
    {
      title: "South African Expertise",
      description: "Deep understanding of local business needs and the South African market landscape.",
      icon: <IconUsers />,
    },
    {
      title: "Modern Technology Stack",
      description: "Built with React, Next.js, TypeScript, and cutting-edge web technologies.",
      icon: <IconCode />,
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates tailored for South African businesses. Quality work at fair prices.",
      icon: <IconBulb />,
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail.",
      icon: <IconRocket />,
    },
    {
      title: "Responsive Design",
      description: "All websites are mobile-first and work perfectly on phones, tablets, and desktops.",
      icon: <IconBulb />,
    },
    {
      title: "Personal Support",
      description: "Direct communication with me throughout the project. No middlemen or agencies.",
      icon: <IconUsers />,
    },
    {
      title: "SEO Optimized",
      description: "Every website is built with search engine optimization in mind for better visibility.",
      icon: <IconRocket />,
    },
    {
      title: "Future-Proof Code",
      description: "Clean, maintainable code that can grow with your business and adapt to new requirements.",
      icon: <IconCode />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <WhyChooseFeature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const WhyChooseFeature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
