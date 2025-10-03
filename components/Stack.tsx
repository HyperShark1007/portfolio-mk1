"use client";

import React from 'react';
import { DiPython, DiReact, DiDocker, DiAws, DiGit } from 'react-icons/di';
import { SiTensorflow, SiPytorch, SiNextdotjs, SiTableau, SiJupyter, SiSqlite, SiNumpy, SiPandas, SiScikitlearn, SiGooglecloud, SiOpenai, SiGooglegemini, SiAnthropic } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { FaLaptopCode } from 'react-icons/fa'; // A generic icon for MLOps/CI/CD if specific ones are too complex
import { color } from 'framer-motion';
import { i } from 'framer-motion/client';


const stackItems = [
    { id: 1, name: 'Python', icon: DiPython, color: '#3776AB', size: '3em' },
    { id: 2, name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', size: '3em' },
    { id: 3, name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', size: '3em' },
    { id: 4, name: 'React', icon: DiReact, color: '#61DAFB', size: '3em' },
    { id: 5, name: 'Next.js', icon: SiNextdotjs, color: '#000000', size: '3em' },
    { id: 6, name: 'Docker', icon: DiDocker, color: '#2496ED', size: '3em' },
    { id: 7, name: 'AWS', icon: DiAws, color: '#FF9900', size: '3em' },
    { id: 8, name: 'Azure', icon: VscAzure, color: '#0089D6', size: '3em' },
    { id: 9, name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4', size: '3em' },
    { id: 10, name: 'Git', icon: DiGit, color: '#F05032', size: '3em' },
    { id: 11, name: 'Tableau', icon: SiTableau, color: '#E97627', size: '3em' },
    { id: 12, name: 'Jupyter', icon: SiJupyter, color: '#F37626', size: '3em' },
    { id: 13, name: 'SQLite', icon: SiSqlite, color: '#003B57', size: '3em' },
    { id: 14, name: 'NumPy', icon: SiNumpy, color: '#013243', size: '3em' },
    { id: 15, name: 'Pandas', icon: SiPandas, color: '#150458', size: '3em' },
    { id: 16, name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E', size: '3em' },
    { id: 17, name: 'MLOps/CI/CD', icon: FaLaptopCode, color: '#4A90E2', size: '3em' },
    { id: 18, name: 'OpenAI', icon: SiOpenai, color: '##FFFFFF', size: '3em' },
    { id: 19, name: 'Gemini', icon: SiGooglegemini, color: '#8A2BE2', size: '3em' },
    { id: 20, name: 'Anthropic', icon: SiAnthropic, color: '##FFFFFF', size: '3em' },

]
export const Stack = () =>{
  return (
    <section className="py-16 glass">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-5xl text-gray-200 font-bold mb-4">End-to-End AI & SaaS Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {stackItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="flex items-center justify-center flex-col rounded-xl p-4"
                    >
                        {item.name === 'Next.js' ? (
                            <div className="bg-white rounded-full p-1"> 
                                {React.createElement(item.icon, {
                                    className: "w-32 h-32",
                                    style: {color: item.color},
                                })}
                            </div>
                        ) : (
                            <div className="mb-4 bg-white/5 p-6 rounded-full">
                                {React.createElement(item.icon, {
                                    className: "w-32 h-32",
                                    style: {color: item.color},
                                })}
                            </div>
                        )}
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}