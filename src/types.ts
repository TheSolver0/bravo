export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  points: number;
  department?: string;
  isCurrentUser?: boolean;
}

export interface Kudo {
  id: string;
  sender: User;
  receiver: User | { name: string; role: string }; // Can be a team
  message: string;
  points: number;
  timestamp: string;
  tags: string[];
  type?: 'individual' | 'team';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  daysLeft: number;
  status: 'active' | 'completed';
  icon: string;
}
