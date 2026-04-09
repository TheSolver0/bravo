import React from 'react';
import { User } from '../types';
import { Trophy, TrendingUp } from 'lucide-react';

interface LeaderboardProps {
  users: User[];
}

export default function Leaderboard({ users }: LeaderboardProps) {
  const topThree = users.slice(0, 3);
  const others = users.slice(3);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-secondary" />
          Classement
        </h3>
        <button className="text-xs font-bold text-primary hover:underline">Tout voir</button>
      </div>

      <div className="space-y-3">
        {users.map((user, index) => (
          <div 
            key={user.id}
            className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 ${
              user.isCurrentUser ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white hover:bg-slate-50'
            }`}
          >
            <div className="relative">
              <div className={`w-6 h-6 absolute -top-1 -left-1 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm ${
                index === 0 ? 'bg-yellow-400 text-yellow-900' : 
                index === 1 ? 'bg-slate-300 text-slate-700' : 
                index === 2 ? 'bg-orange-400 text-orange-900' : 'bg-slate-100 text-slate-500'
              }`}>
                {index + 1}
              </div>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-10 h-10 rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-bold truncate ${user.isCurrentUser ? 'text-white' : 'text-slate-900'}`}>{user.name}</p>
              <p className={`text-[10px] uppercase tracking-wider font-medium truncate ${user.isCurrentUser ? 'text-white/70' : 'text-slate-400'}`}>
                {user.department || user.role}
              </p>
            </div>

            <div className="text-right">
              <p className={`text-sm font-bold ${user.isCurrentUser ? 'text-white' : 'text-slate-900'}`}>{user.points.toLocaleString()}</p>
              <div className="flex items-center justify-end gap-0.5 text-[10px] font-bold text-emerald-500">
                <TrendingUp className="w-2.5 h-2.5" />
                <span>+12%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
