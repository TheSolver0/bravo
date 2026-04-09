import React from 'react';
import { Challenge } from '../types';
import { Clock, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const progressPercent = (challenge.progress / challenge.total) * 100;

  return (
    <div className="bg-white rounded-2xl p-6 card-shadow group">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Trophy className="w-6 h-6" />
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Récompense</p>
          <p className="text-lg font-black text-primary">+{challenge.reward} pts</p>
        </div>
      </div>

      <h4 className="text-lg font-bold text-slate-900 mb-2">{challenge.title}</h4>
      <p className="text-sm text-slate-500 mb-6 line-clamp-2">{challenge.description}</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-400 uppercase tracking-wider">Progression</span>
          <span className="text-primary">{challenge.progress} / {challenge.total}</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50">
        <div className="flex items-center gap-2 text-slate-400">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-bold">{challenge.daysLeft} jours restants</span>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
          <span>Participer</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
