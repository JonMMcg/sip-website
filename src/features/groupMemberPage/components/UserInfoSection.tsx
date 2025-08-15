import React from 'react';
import { UserInfoSectionProps } from '../types';

export const UserInfoSection: React.FC<UserInfoSectionProps> = ({ user, loading = false }) => {
  
  if (loading) {
    return (
      <div className="bg-primary-white rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 bg-secondary-gray/20 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="h-6 bg-secondary-gray/20 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-secondary-gray/20 rounded animate-pulse w-32"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-secondary-gray/20 rounded animate-pulse"></div>
          <div className="h-4 bg-secondary-gray/20 rounded animate-pulse w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-200">
      {/* User Profile Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <img 
            src={user.profileImageURL || '/placeholder-avatar.png'} 
            alt={`${user.name} profile`}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary-blue/10 shadow-md"
          />
          {/* Online indicator - you can make this dynamic */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-primary-white shadow-sm"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold text-primary-black mb-1">{user.name}</h2>
          {user.username && (
            <p className="text-sm text-secondary-gray font-medium">@{user.username}</p>
          )}
        </div>
      </div>

      {/* User Bio */}
      {user.bio && (
        <div className="mb-6">
          <p className="text-primary-gray leading-relaxed">{user.bio}</p>
        </div>
      )}

      {/* User Quote */}
      {user.quote && (
        <div className="mb-6 p-4 bg-secondary-yellow rounded-lg border-l-4 border-primary-yellow">
          <p className="text-primary-gray italic">"{user.quote}"</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-200/60">
        <div className="text-center flex-1">
          <div className="text-lg font-bold text-primary-black mb-1">
            {(user.followers || 0).toLocaleString()}
          </div>
          <div className="text-xs text-secondary-gray font-semibold uppercase tracking-wide">
            Followers
          </div>
        </div>
        
        <div className="w-px bg-slate-200/80 mx-4 h-8"></div>
        
        <div className="text-center flex-1">
          <div className="text-lg font-bold text-primary-black mb-1">
            {(user.following || 0).toLocaleString()}
          </div>
          <div className="text-xs text-secondary-gray font-semibold uppercase tracking-wide">
            Following
          </div>
        </div>
        
        <div className="w-px bg-slate-200/80 mx-4 h-8"></div>
        
        <div className="text-center flex-1">
          <div className="text-lg font-bold text-primary-black mb-1">
            {(user.subscribing || 0).toLocaleString()}
          </div>
          <div className="text-xs text-secondary-gray font-semibold uppercase tracking-wide">
            Subscribing
          </div>
        </div>
      </div>
    </div>
  );
};