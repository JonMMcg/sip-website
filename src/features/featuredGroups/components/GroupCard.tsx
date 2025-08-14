import React, { useState, useEffect, useRef } from 'react';
import { Group } from '../services/groupService';
import { useGroupMembers } from '../hooks/useGroupMembers';
import { GroupCardHeader } from './GroupCardHeader';
import { MemberSection } from './MemberSection';
import { GroupLatestMessages } from './GroupLatestMessages';

interface GroupCardProps {
  group: Group;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const { members, loading, error } = useGroupMembers(isExpanded ? group.id : undefined);

  // Reset expansion state when group changes
  useEffect(() => {
    setIsExpanded(false);
  }, [group.id]);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate parallax offset based on card position relative to viewport
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const maxOffset = 30; // Maximum parallax movement in pixels
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setScrollOffset((scrollProgress - 0.5) * maxOffset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleCardClick = (e: React.MouseEvent) => {
    setIsExpanded(!isExpanded);
  };

  const cardClasses = `
    relative max-w-xl w-full mx-auto my-5 
    rounded-3xl bg-white bg-gradient-to-br from-white to-slate-50 
    transition-all duration-300 ease-in-out 
    cursor-pointer 
    overflow-hidden 
    isolate
    ${isExpanded 
      ? 'border-2 border-blue-600 shadow-xl' 
      : 'shadow-lg hover:-translate-y-1.5 hover:shadow-2xl'
    }
  `;

  return (
    <div 
      ref={cardRef}
      className={cardClasses}
      onClick={handleCardClick}>
      
      <GroupCardHeader 
        groupImage={group.groupImage}
        groupName={group.name}
        isExpanded={isExpanded}
        scrollOffset={scrollOffset}
      />

      {/* Rounded White Content Section */}
      <div className="bg-white rounded-t-3xl p-6 -mt-5 relative z-10 shadow-lg min-h-min">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h2 className="m-0 text-gray-800 text-3xl font-bold tracking-tight flex-1">
              {group.name || 'Unnamed Group'}
            </h2>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="
                flex items-center gap-1.5 flex-shrink-0 ml-3
                py-1.5 px-3 
                bg-blue-500/5 hover:bg-blue-500/10 
                border border-blue-500/10 
                rounded-md 
                text-xs font-semibold text-blue-600 
                transition-all duration-200"
            >
              <span>{isExpanded ? 'Hide' : 'Show'}</span>
              <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
          </div>
          
          <span className="text-slate-500 text-sm font-medium">
            {(group.subscribersCount || 0).toLocaleString()} members
          </span>
        </div>
        
        <p className="m-0 mb-4 text-base leading-relaxed text-slate-600">
          {group.description || 'No description available.'}
        </p>

        <GroupLatestMessages 
          last_message={group.last_message}
          last_message_username={group.last_message_username}
          last_message_time={group.last_message_time}
        />
      </div>

      {isExpanded && (
        <MemberSection 
          members={members}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
};
