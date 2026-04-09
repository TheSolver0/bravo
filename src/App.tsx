import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import FluxView from './views/FluxView';
import EquipeView from './views/EquipeView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('flux');

  const renderView = () => {
    switch (activeTab) {
      case 'flux':
        return <FluxView />;
      case 'equipe':
        return <EquipeView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 mb-6">
              <span className="text-4xl">🚧</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">En construction</h2>
            <p className="text-slate-500 max-w-xs mx-auto">
              Cette section sera bientôt disponible avec de nouvelles fonctionnalités incroyables.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pl-64 min-h-screen flex flex-col">
        <Topbar />
        
        <div className="p-8 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <footer className="p-8 text-center border-t border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Bravo - Le Pouls Lumineux • Propulsé par l'Innovation
          </p>
        </footer>
      </main>
    </div>
  );
}
