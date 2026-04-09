import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'white';
}

export default function StatCard({ label, value, trend, icon: Icon, variant = 'white' }: StatCardProps) {
  const variants = {
    white: 'bg-white text-slate-900',
    primary: 'bg-primary text-white shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-white shadow-lg shadow-secondary/20',
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`${variants[variant]} p-6 rounded-2xl card-shadow flex flex-col justify-between h-full`}
    >
      <div className="flex items-start justify-between mb-4">
        <p className={`text-xs font-bold uppercase tracking-widest ${variant === 'white' ? 'text-slate-400' : 'text-white/70'}`}>
          {label}
        </p>
        {Icon && <Icon className={`w-5 h-5 ${variant === 'white' ? 'text-primary' : 'text-white'}`} />}
      </div>
      
      <div>
        <h4 className="text-3xl font-black tracking-tight mb-1">{value}</h4>
        {trend && (
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${
              variant === 'white' ? 'bg-emerald-50 text-emerald-600' : 'bg-white/20 text-white'
            }`}>
              {trend}
            </span>
            <span className={`text-[10px] font-medium ${variant === 'white' ? 'text-slate-400' : 'text-white/60'}`}>
              vs mois dernier
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
