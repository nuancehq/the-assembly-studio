import React from 'react';
import { ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <div className="flex items-center justify-center mb-6 gap-2">
          <Sparkles className="h-6 w-6 text-primary-600 animate-pulse" />
          <span className="text-primary-600 font-semibold">Now accepting new projects</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          A Modern Hub for
          <div className="relative">
            <span className="block text-primary-600 mt-2">Made-to-Order Things</span>
            <div className="absolute -right-8 top-0 text-primary-400 animate-bounce">
              <MousePointer2 className="h-6 w-6 transform -rotate-12" />
            </div>
          </div>
        </h1>
        <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
          From prototypes to production parts, we help creators and businesses bring original ideas to life—layer by layer, right here in Canada.
        </p>
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Link to="/quote" className="group btn-primary flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
            Start a Project
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/quote" className="group flex items-center text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
            Need a Hand With Design?
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative group cursor-pointer">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-gray-900/10">
            <img
              src="https://images.unsplash.com/photo-1631744591853-998c4308bbb0?auto=format&fit=crop&q=80"
              alt="Professional 3D printer in action, creating precise layers of a complex object"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 group-hover:ring-primary-500/50 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <span className="text-white text-lg font-semibold">Watch our process</span>
          </div>
        </div>
      </div>
    </div>
  );
}