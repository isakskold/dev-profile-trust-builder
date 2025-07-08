
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Frontend Excellence",
      description: "Modern React, TypeScript, and cutting-edge UI frameworks"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Backend Mastery",
      description: "Scalable APIs, databases, and cloud infrastructure"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Full Stack Vision",
      description: "End-to-end solutions from concept to deployment"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Performance Focus",
      description: "Optimized applications that scale and perform"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate full stack developer with 5+ years of experience building 
            robust web applications for startups and enterprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                I specialize in creating seamless digital experiences that bridge 
                the gap between beautiful design and powerful functionality. My 
                approach combines technical expertise with business understanding 
                to deliver solutions that truly make an impact.
              </p>
              <p className="mb-6">
                From architecting scalable backend systems to crafting intuitive 
                user interfaces, I bring a comprehensive skill set that ensures 
                your project succeeds at every level.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying current 
                with the latest technologies while prioritizing proven, stable 
                solutions for production applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover-lift">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
