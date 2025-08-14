import React, { useState, useEffect, useRef } from 'react';
import { Group } from '../services/groupService';
import { useGroupMembers } from '../hooks/useGroupMembers';
import { MemberCard } from './MemberCard';
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

  return (
    <div 
      ref={cardRef}
      style={{ 
        border: isExpanded ? '2px solid #3b82f6' : 'none', 
        padding: '0', 
        margin: '20px auto', 
        borderRadius: '24px', 
        backgroundColor: '#fff',
        boxShadow: isExpanded 
          ? '0 20px 60px rgba(59, 130, 246, 0.15), 0 8px 32px rgba(0,0,0,0.1)' 
          : '0 8px 32px rgba(0,0,0,0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        maxWidth: '600px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        isolation: 'isolate',
        contain: 'layout style'
      }}
      onClick={handleCardClick}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(59, 130, 246, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
        }
      }}>
      
      <GroupCardHeader 
        groupImage={group.groupImage}
        groupName={group.name}
        isExpanded={isExpanded}
        scrollOffset={scrollOffset}
      />

      {/* Rounded White Content Section */}
      <div style={{ 
        backgroundColor: '#ffffff',
        borderRadius: '20px 20px 24px 24px',
        padding: '24px',
        margin: '-20px 0 0 0',
        position: 'relative',
        zIndex: 3,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        minHeight: 'fit-content'
      }}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}>
            <h2 style={{ 
              margin: '0', 
              color: '#1f2937', 
              fontSize: '1.8em',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              flex: 1
            }}>
              {group.name || 'Unnamed Group'}
            </h2>
            
            {/* Show/Hide Button - Top Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              style={{
                padding: '6px 12px',
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                borderRadius: '6px',
                fontSize: '0.75em',
                fontWeight: '600',
                color: '#3b82f6',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                flexShrink: 0,
                marginLeft: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
              }}
            >
              <span style={{ fontSize: '0.9em' }}>
                {isExpanded ? 'Hide' : 'Show'}
              </span>
              <div style={{
                fontSize: '0.8em',
                transition: 'transform 0.3s ease',
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                ▼
              </div>
            </button>
          </div>
          
          {/* Subscriber Count */}
          <span style={{
            color: '#6b7280',
            fontSize: '0.9em',
            fontWeight: '500'
          }}>
            {(group.subscribersCount || 0).toLocaleString()} members
          </span>
        </div>
        
        <p style={{
          margin: '0 0 16px 0',
          lineHeight: '1.6',
          color: '#4b5563',
          fontSize: '0.95em'
        }}>
          {group.description || 'No description available.'}
        </p>

        <GroupLatestMessages 
          last_message={group.last_message}
          last_message_username={group.last_message_username}
          last_message_time={group.last_message_time}
        />

      </div>

      {/* Members Section - Smooth Drawer */}
      {isExpanded && (
        <MemberSection 
          members={members}
          loading={loading}
          error={error}
        />
      )}


      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-20px);
            maxHeight: 0;
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
            maxHeight: 1000px;
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Custom scrollbar styling */
        div::-webkit-scrollbar {
          height: 8px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.5);
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.5);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.8);
        }

        /* Firefox scrollbar */
        div {
          scrollbar-width: thin;
          scrollbar-color: rgba(148, 163, 184, 0.5) rgba(241, 245, 249, 0.5);
        }
      `}</style>
    </div>
  );
};
