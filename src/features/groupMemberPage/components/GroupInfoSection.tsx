import React from 'react';
import { GroupInfoSectionProps } from '../types';

export const GroupInfoSection: React.FC<GroupInfoSectionProps> = ({ group, loading = false }) => {
  
  if (loading) {
    return (
      <div className="bg-primary-white rounded-2xl p-6 shadow-soft">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-secondary-gray/20 rounded-xl animate-pulse"></div>
          <div className="flex-1">
            <div className="h-6 bg-secondary-gray/20 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-secondary-gray/20 rounded animate-pulse w-24"></div>
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
    <div className="bg-primary-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 p-6 h-full flex flex-col">
      {/* Group Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary-black mb-2">{group.name}</h2>
        <div className="flex items-center justify-between text-sm text-secondary-gray">
          <span className="font-medium">
            {(group.subscribersCount || 0).toLocaleString()} subscribers
          </span>
          {group.createdAt && (
            <span>
              Created {new Date(
                group.createdAt instanceof Date 
                  ? group.createdAt 
                  : group.createdAt.seconds * 1000
              ).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          )}
        </div>
      </div>

      {/* Group Image */}
      <div className="mb-6">
        <img 
          src={group.groupImage || '/placeholder-group.png'} 
          alt={`${group.name} group image`}
          className="w-full h-64 object-cover rounded-xl border border-slate-200"
        />
      </div>

      {/* Group Description - flex-grow to fill remaining space */}
      {group.description && (
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-semibold text-primary-black mb-2 uppercase tracking-wide">
              About This Group
            </h4>
            <p className="text-primary-gray leading-relaxed mb-4">{group.description}</p>
          </div>
          
          {/* Action Buttons - pushed to bottom */}
          <div className="flex space-x-3 mt-auto">
            <button className="flex-1 bg-primary-red text-primary-white py-2 px-4 rounded-lg hover:bg-primary-red/90 transition-colors duration-200 text-sm font-medium">
              Join Discussion
            </button>
            <button className="flex-1 bg-slate-100 text-primary-gray py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors duration-200 text-sm font-medium">
              Share Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
};