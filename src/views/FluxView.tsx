import React from 'react';
import { Kudo, User, Challenge } from '../types';
import KudoCard from '../components/KudoCard';
import Leaderboard from '../components/Leaderboard';
import StatCard from '../components/StatCard';
import { Trophy, Zap, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_KUDOS: Kudo[] = [
  {
    id: '1',
    sender: { id: 's1', name: 'Sarah Jenkins', role: 'Design Ops', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', points: 1520 },
    receiver: { id: 'r1', name: 'David Chen', role: 'Ingénierie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', points: 1840 },
    message: "Un immense merci à David pour son aide tardive sur le bug en production. Ton expertise technique a sauvé la mise !",
    points: 50,
    timestamp: 'Il y a 2 heures',
    tags: ['TRAVAIL D\'ÉQUIPE', 'EXPERTISE']
  },
  {
    id: '2',
    sender: { id: 's2', name: 'Marcus Thorne', role: 'Produit', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', points: 1290 },
    receiver: { id: 'r2', name: 'Alex Rivera', role: 'Marketing', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', points: 950 },
    message: "Alex a pris l'entière responsabilité de la présentation client en l'absence du responsable. Cette autonomie est inspirante pour toute l'équipe.",
    points: 75,
    timestamp: 'Il y a 5 heures',
    tags: ['AUTONOMIE', 'LEADERSHIP']
  },
  {
    id: '3',
    sender: { id: 's3', name: 'Elena Rodriguez', role: 'Design', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', points: 2100 },
    receiver: { name: 'L\'Équipe Design', role: 'Département' },
    message: "La nouvelle documentation du design system est de classe mondiale. Merci pour l'efficacité et la clarté que cela apporte à nos développeurs !",
    points: 120,
    timestamp: 'Hier',
    tags: ['EFFICACITÉ', 'QUALITÉ'],
    type: 'team'
  }
];

const MOCK_LEADERBOARD: User[] = [
  { id: '1', name: 'David Chen', role: 'Ingénierie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', points: 1840, department: 'INGÉNIERIE' },
  { id: '2', name: 'Sarah Jenkins', role: 'Design Ops', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', points: 1520, department: 'DESIGN OPS' },
  { id: '3', name: 'Marcus Thorne', role: 'Produit', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', points: 1290, department: 'PRODUIT' },
  { id: 'me', name: 'Vous', role: 'Marketing', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre', points: 850, department: 'MARKETING', isCurrentUser: true },
];

export default function FluxView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-8">
        {/* Hero Challenge Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden bg-primary rounded-3xl p-8 text-white shadow-2xl shadow-primary/30"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-block bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Défi Actif
              </span>
              <h2 className="text-4xl font-black tracking-tight mb-4">Sprint Innovation Q3</h2>
              <p className="text-primary-100 text-lg leading-relaxed max-w-md">
                Félicitez un collègue pour une initiative créative et débloquez le badge 'Pionnier' pour toute votre équipe.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center gap-6">
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Progression</p>
                <p className="text-3xl font-black">740/1000</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center relative">
                <Zap className="w-8 h-8 text-secondary fill-current" />
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle 
                    cx="32" cy="32" r="28" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeDasharray="175" 
                    strokeDashoffset="45"
                    className="text-secondary"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </motion.div>

        {/* Kudos Feed */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Flux d'Appréciation</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-500 hover:text-primary transition-colors card-shadow">Tous</button>
              <button className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-500 hover:text-primary transition-colors card-shadow">Mon Équipe</button>
            </div>
          </div>
          
          <div className="space-y-6">
            {MOCK_KUDOS.map(kudo => (
              <KudoCard key={kudo.id} kudo={kudo} />
            ))}
          </div>
          
          <button className="w-full py-4 text-slate-400 font-bold text-sm hover:text-primary transition-colors">
            Voir plus d'activité
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-4 space-y-8">
        <div className="bg-white rounded-3xl p-8 card-shadow space-y-8">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Votre Pouls</p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-5xl font-black text-primary tracking-tighter">2 450</h4>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Points Totaux</span>
            </div>
            <div className="mt-6 space-y-2">
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4 rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                Prochaine récompense : <span className="text-slate-900 font-bold">Déjeuner d'équipe</span> (2 500 pts)
              </p>
            </div>
          </div>

          <Leaderboard users={MOCK_LEADERBOARD} />

          <div className="pt-8 border-t border-slate-50">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Vos Badges Récents</h3>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shadow-sm">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center shadow-sm">
                <Users className="w-5 h-5 fill-current" />
              </div>
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center shadow-sm">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
