import React, { useState, useEffect, useRef } from 'react';
import { Group } from '../services/groupService';
import { useGroupMembers } from '../hooks/useGroupMembers';
import { MemberCard } from './MemberCard';
import { GroupCardHeader } from './GroupCardHeader';

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

  const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return 'Recently';
    
    try {
      // Handle Firestore Timestamp
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      const now = new Date();
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      
      if (diffInMinutes < 1) return 'Just now';
      if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
      
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) return `${diffInHours}h ago`;
      
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return `${diffInDays}d ago`;
      
      return date.toLocaleDateString();
    } catch (error) {
      return 'Recently';
    }
  };


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

        {/* Latest Activity - Back in main card */}
        {(group.last_message || group.last_message_username) && (
          <div style={{ 
            marginBottom: '0',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            {/* Message Thread */}
            <div style={{
              padding: '16px',
              backgroundColor: '#f8fafc',
              minHeight: '60px'
            }}>
              {/* Sender Name */}
              <div style={{
                fontSize: '0.75em',
                color: '#6b7280',
                marginBottom: '4px',
                fontWeight: '500'
              }}>
                {group.last_message_username || 'Anonymous'}
              </div>
              
              {/* Message Bubble */}
              <div style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '10px 14px',
                borderRadius: '18px 18px 18px 4px',
                display: 'inline-block',
                maxWidth: '85%',
                wordWrap: 'break-word',
                fontSize: '0.85em',
                lineHeight: '1.4',
                boxShadow: '0 1px 2px rgba(59, 130, 246, 0.3)',
                position: 'relative'
              }}>
                {group.last_message || 'No messages yet.'}
                
                {/* Message tail */}
                <div style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '-4px',
                  width: '0',
                  height: '0',
                  borderStyle: 'solid',
                  borderWidth: '0 0 8px 8px',
                  borderColor: 'transparent transparent #3b82f6 transparent'
                }} />
              </div>
              
              {/* Timestamp */}
              <div style={{
                fontSize: '0.7em',
                color: '#9ca3af',
                marginTop: '4px',
                marginLeft: '4px'
              }}>
                {formatTimestamp(group.last_message_time)}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Members Section - Smooth Drawer */}
      {isExpanded && (
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '0 0 24px 24px',
          borderTop: '2px solid #f1f5f9',
          padding: '20px 24px 32px 24px',
          animation: 'slideDown 0.5s ease-out forwards',
          isolation: 'isolate',
          contain: 'layout style',
          willChange: 'transform, opacity'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '16px' 
          }}>
            <h3 style={{ 
              margin: '0', 
              color: '#1f2937', 
              fontSize: '1.2em',
              fontWeight: '600'
            }}>
              Members
            </h3>
            {!loading && !error && (
              <span style={{ 
                backgroundColor: '#dbeafe', 
                color: '#1e40af',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.8em',
                fontWeight: '600'
              }}>
                {members.length} {members.length === 1 ? 'member' : 'members'}
              </span>
            )}
          </div>

          {loading && (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px',
              color: '#6b7280'
            }}>
              <div style={{
                display: 'inline-block',
                width: '32px',
                height: '32px',
                border: '3px solid #e5e7eb',
                borderTop: '3px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '12px'
              }} />
              <p style={{ margin: '0', fontSize: '0.9em' }}>Loading members...</p>
            </div>
          )}

          {error && (
            <div style={{ 
              textAlign: 'center', 
              padding: '20px',
              color: '#dc2626',
              backgroundColor: '#fef2f2',
              borderRadius: '8px',
              border: '1px solid #fecaca'
            }}>
              <p style={{ margin: '0', fontSize: '0.9em' }}>
                Failed to load members: {error.message}
              </p>
            </div>
          )}

          {!loading && !error && members.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px',
              color: '#6b7280',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ margin: '0', fontSize: '0.9em' }}>
                No members found in this group.
              </p>
            </div>
          )}

          {!loading && !error && members.length > 0 && (
            <div style={{
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
              paddingBottom: '10px',
              animation: 'slideUp 0.4s ease-out'
            }}>
              <div style={{
                display: 'flex',
                gap: '16px',
                paddingRight: '20px', // Extra padding at the end
                minWidth: 'fit-content'
              }}>
                {members.map((member) => (
                  <div key={member.uId} style={{ flexShrink: 0 }}>
                    <MemberCard user={member} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
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
