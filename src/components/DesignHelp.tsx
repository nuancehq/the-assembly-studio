import React from 'react';
import { PenTool, FileEdit, ArrowRight, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DesignHelp() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 to-primary-900/50 mix-blend-multiply"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/5 shadow-xl shadow-primary-600/10 ring-1 ring-white/10"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white sm:text-4xl">
            We're More Than Printers—
            <span className="text-primary-400">We're Partners.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Got an idea in your head or a sketch on paper? Our team offers 3D modeling consultation services to help bring your vision into a printable, real-world object.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="group flex flex-col bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center">
              <PenTool className="h-8 w-8 text-primary-400" />
              <div className="h-0.5 flex-grow ml-4 bg-gradient-to-r from-primary-400/40 to-transparent"></div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">Starting from scratch</h3>
            <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">Turn your idea into a fully-realized 3D model ready for printing.</p>
          </div>
          
          <div className="group flex flex-col bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center">
              <FileEdit className="h-8 w-8 text-primary-400" />
              <div className="h-0.5 flex-grow ml-4 bg-gradient-to-r from-primary-400/40 to-transparent"></div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">Modifying existing designs</h3>
            <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">Customize and adapt existing models to meet your specific needs.</p>
          </div>
          
          <div className="group flex flex-col bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center">
              <Wand2 className="h-8 w-8 text-primary-400" />
              <div className="h-0.5 flex-grow ml-4 bg-gradient-to-r from-primary-400/40 to-transparent"></div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">From sketch to STL</h3>
            <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">Transform your rough sketches into print-ready 3D files.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/quote" className="group btn-primary flex items-center justify-center">
            Book a Consult
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/quote" className="group rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition-colors flex items-center justify-center">
            Start With a Sketch
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}