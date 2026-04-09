import React from 'react';
import { motion } from 'motion/react';
import { Kudo } from '../types';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

export default function KudoCard({ kudo }: { kudo: Kudo, key?: string | number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 card-shadow group hover:translate-y-[-2px] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={kudo.sender.avatar} 
              alt={kudo.sender.name} 
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] text-white border-2 border-white shadow-sm">
              <Heart className="w-2.5 h-2.5 fill-current" />
            </div>
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-tight">
              {kudo.sender.name} <span className="font-normal text-slate-400 mx-1">à envoyé un bravo à</span> {kudo.receiver.name}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{kudo.timestamp}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="bg-primary/5 text-primary px-3 py-1.5 rounded-xl font-bold text-lg flex items-center gap-1.5 shadow-sm shadow-primary/5">
            <span className="text-sm font-medium opacity-70">+</span>
            {kudo.points}
            <span className="text-[10px] uppercase tracking-wider opacity-60">pts</span>
          </div>
        </div>
      </div>

      <div className="relative pl-4 border-l-2 border-primary/10 py-1 mb-6">
        <p className="text-slate-700 leading-relaxed italic">
          "{kudo.message}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex gap-2">
          {kudo.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-50 text-slate-500 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors text-xs font-semibold">
            <Heart className="w-4 h-4" />
            <span>24</span>
          </button>
          <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors text-xs font-semibold">
            <MessageSquare className="w-4 h-4" />
            <span>8</span>
          </button>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
