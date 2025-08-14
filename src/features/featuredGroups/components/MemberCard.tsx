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
      relative w-[280px] min-w-[280px] max-w-[280px] 
      p-5 m-2 rounded-[20px] 
      bg-white bg-gradient-to-br from-white to-slate-50 
      shadow-soft 
      transition-all duration-300 ease-in-out 
      cursor-pointer 
      hover:-translate-y-1 hover:shadow-medium
      overflow-hidden
    ">
      
      {/* Profile Section */}
      <div className="flex items-center mb-4.5">
        <div className="relative">
          <img 
            src={user.profileImageURL || '/placeholder-avatar.png'} 
            alt={user.name || 'User'} 
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/10 shadow-md"
          />
          {/* Online indicator */}
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
        </div>
        
        <div className="ml-3.5 flex-1">
          <h3 className="m-0 mb-1 text-base font-bold text-gray-800 leading-tight">
            {user.name || 'Unknown User'}
          </h3>
          <p className="m-0 text-sm text-gray-500 font-medium">
            @{user.username || 'unknown'}
          </p>
        </div>
      </div>

      {/* Quote Section */}
      {user.quote && (
        <div className="mb-4">
          <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 relative">
            <p className="m-0 text-sm leading-relaxed text-gray-600 italic">
              "{user.quote}"
            </p>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="flex justify-between pt-4 border-t border-slate-200/60">
        <div className="text-center flex-1">
          <div className="text-base font-bold text-gray-800 mb-1">
            {(user.followers || 0).toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Followers
          </div>
        </div>
        
        <div className="w-px bg-slate-200/80 mx-3" />
        
        <div className="text-center flex-1">
          <div className="text-base font-bold text-gray-800 mb-1">
            {(user.following || 0).toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Following
          </div>
        </div>
        
        <div className="w-px bg-slate-200/80 mx-3" />
        
        <div className="text-center flex-1">
          <div className="text-base font-bold text-gray-800 mb-1">
            {(user.subscribing || 0).toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Subscribing
          </div>
        </div>
      </div>

    </div>
  );
};