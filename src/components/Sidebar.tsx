import React from 'react';
import { 
  Home, 
  Trophy, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  PlusCircle,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'flux', label: 'Accueil', icon: Home },
  { id: 'defis', label: 'Défis', icon: Trophy },
  { id: 'mes-bravos', label: 'Mes Bravos', icon: Heart },
  { id: 'equipe', label: 'Équipe', icon: Users },
  { id: 'stats', label: 'Stats', icon: BarChart3 },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col fixed left-0 top-0 z-40">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            B
          </div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Bravo</h1>
        </div>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Portail de Reconnaissance</p>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === item.id 
                ? 'bg-primary/5 text-primary font-semibold shadow-sm shadow-primary/5' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'}`} />
            <span>{item.label}</span>
            {activeTab === item.id && (
              <motion.div 
                layoutId="active-pill"
                className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="px-6 py-8 space-y-6">
        <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
          <PlusCircle className="w-5 h-5" />
          <span>Envoyer un Bravo</span>
        </button>

        <div className="pt-6 border-t border-slate-100 space-y-4">
          <button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors w-full px-2">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Paramètres</span>
          </button>
          <button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors w-full px-2">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Aide</span>
          </button>
        </div>
      </div>
    </div>
  );
}
