import React from 'react';

export default function TeamCard({ name, position, chapter, imageUrl, description, glowColor }) {
  return (
    <div 
      className="relative group bg-[#11151e] rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-pointer"
      style={{ '--glow-color': glowColor }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ 
          boxShadow: `0 0 30px 0px var(--glow-color) inset`, 
          border: `1px solid var(--glow-color)` 
        }}
      ></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">          
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 relative">
             <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
             <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay" 
                style={{ backgroundColor: 'var(--glow-color)' }}>
             </div>
          </div>          
          <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#1c2230] text-gray-300 uppercase tracking-wider border border-gray-700">
            {chapter}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-1">{name}</h3>
          <p className="text-sm font-medium text-gray-400">{position}</p>          
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
             <div className="overflow-hidden">
               <p className="text-sm text-gray-300 leading-relaxed border-t border-gray-800 mt-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                 {description}
               </p>
             </div>
          </div>          
          <div className="group-hover:hidden flex items-center text-sm text-gray-600 mt-4 transition-opacity duration-300">
            View Details <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}