import React from 'react';
import { User } from '../types';
import { Search, Filter, Mail, MessageSquare, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_TEAM: User[] = [
  { id: '1', name: 'Allegra Dissake', role: 'Directrice Artistique', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', points: 1250, department: 'Design' },
  { id: '2', name: 'Salomon Sibafo', role: 'Développeur Senior', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', points: 1840, department: 'Ingénierie' },
  { id: '3', name: 'Dilane Taptue', role: 'Product Owner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lea', points: 950, department: 'Produit' },
  { id: '4', name: 'Marie Ngo Tonye', role: 'Growth Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', points: 1520, department: 'Marketing' },
  { id: '5', name: 'Luc Fotso', role: 'Fullstack Dev', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan', points: 2100, department: 'Ingénierie' },
  { id: '6', name: 'Eric Moukouri', role: 'UX Designer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amandine', points: 1100, department: 'Design' },
];

export default function EquipeView() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Répertoire d'Équipe</h2>
          <p className="text-slate-500 font-medium">Découvrez vos collègues et célébrez leurs réussites.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="bg-white border-none rounded-xl py-2.5 pl-10 pr-4 text-sm card-shadow outline-none focus:ring-2 focus:ring-primary/20 w-64"
            />
          </div>
          <button className="p-2.5 bg-white rounded-xl card-shadow text-slate-500 hover:text-primary transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-slate-100 pb-4 overflow-x-auto no-scrollbar">
        {['Tous les membres', 'Marketing', 'Design', 'Ingénierie', 'Produit'].map((tab, i) => (
          <button 
            key={tab}
            className={`px-4 py-2 text-sm font-bold whitespace-nowrap transition-all relative ${
              i === 0 ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab}
            {i === 0 && (
              <motion.div 
                layoutId="team-tab-indicator"
                className="absolute bottom-[-17px] left-0 right-0 h-1 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TEAM.map((member) => (
          <motion.div 
            key={member.id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 card-shadow flex flex-col items-center text-center group"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-3xl overflow-hidden ring-4 ring-slate-50 group-hover:ring-primary/10 transition-all duration-300">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-5 h-5 rounded-full border-4 border-white shadow-sm"></div>
            </div>

            <h4 className="text-xl font-black text-slate-900 mb-1">{member.name}</h4>
            <p className="text-sm font-bold text-primary mb-1">{member.role}</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">{member.department}</p>

            <div className="flex gap-2 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-50 text-slate-500 rounded-lg">Créativité</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-50 text-slate-500 rounded-lg">Leadership</span>
            </div>

            <button className="w-full bg-slate-50 hover:bg-primary hover:text-white text-slate-900 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group/btn">
              <Plus className="w-4 h-4" />
              <span>Envoyer un Bravo</span>
            </button>
          </motion.div>
        ))}

        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white hover:border-primary/20 transition-all duration-300">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary card-shadow mb-6 transition-colors">
            <Plus className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Ajouter un membre</h4>
          <p className="text-sm text-slate-500">Invitez un nouveau collaborateur</p>
        </div>
      </div>
    </div>
  );
}
