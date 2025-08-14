import React from 'react';
import { MemberCard, User } from './MemberCard';

interface MemberSectionProps {
  members: User[];
  loading: boolean;
  error: Error | null;
}

export const MemberSection: React.FC<MemberSectionProps> = ({ members, loading, error }) => {
  return (
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
  );
};
