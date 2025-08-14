import React from 'react';

// This interface now only includes the fields needed for display.
export interface User {
  uId: string;
  name: string;
  username: string;
  quote: string;
  profileImageURL: string;
  followers: number;
  following: number;
  subscribing: number;
  createdAt: any;
}

interface MemberCardProps {
  user: User;
}

export const MemberCard: React.FC<MemberCardProps> = ({ user }) => {
  return (
    <div className="
      relative w-full min-w-[260px] max-w-[280px] 
      p-4 m-2 rounded-[20px] 
      bg-primary-white bg-gradient-to-br from-primary-white to-slate-50 
      shadow-soft 
      transition-all duration-300 ease-in-out 
      cursor-pointer 
      hover:-translate-y-1 hover:shadow-medium
      overflow-hidden
    ">
      
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <img 
          src={user.profileImageURL || '/placeholder-avatar.png'} 
          alt={user.name || 'User'} 
          className="w-16 h-16 rounded-full object-cover border-2 border-primary-blue/10 shadow-md"
        />
        
        <div className="ml-4 flex-1">
          <h3 className="m-0 mb-1 text-base font-bold text-primary-black leading-tight">
            {user.name || 'Unknown User'}
          </h3>
          <p className="m-0 text-sm text-secondary-gray font-medium">
            @{user.username || 'unknown'}
          </p>
        </div>
      </div>

      {/* Stats Section - MOVED */}
      <div className="flex justify-between py-3 mb-3 border-y border-slate-200/60">
        <div className="text-center flex-1 min-w-0">
          <div className="text-sm font-bold text-primary-black mb-1 truncate">
            {(user.followers || 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-secondary-gray font-semibold uppercase tracking-wide">
            Followers
          </div>
        </div>
        
        <div className="w-px bg-slate-200/80 mx-2" />
        
        <div className="text-center flex-1 min-w-0">
          <div className="text-sm font-bold text-primary-black mb-1 truncate">
            {(user.following || 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-secondary-gray font-semibold uppercase tracking-wide">
            Following
          </div>
        </div>
        
        <div className="w-px bg-slate-200/80 mx-2" />
        
        <div className="text-center flex-1 min-w-0">
          <div className="text-sm font-bold text-primary-black mb-1 truncate">
            {(user.subscribing || 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-secondary-gray font-semibold uppercase tracking-wide">
            Subscribing
          </div>
        </div>
      </div>

      {/* Quote Section */}
      {user.quote && (
        <div className="mb-2">
          <div className="p-4 bg-primary-blue/5 rounded-2xl border border-primary-blue/10 relative">
            <p className="m-0 text-sm leading-relaxed text-primary-gray italic">
              "{user.quote}"
            </p>
          </div>
        </div>
      )}

    </div>
  );
};