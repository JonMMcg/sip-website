import React, { useState } from 'react';

export interface User {
  uId: string;
  name: string;
  username: string;
  quote: string;
  profileImageURL: string;
  email: string;
  followers: number;
  following: number;
  subscribing: number;
  createdAt: any;
  lastTokenUpdate: any;
  fcmToken?: string;
  stripeCustomerId?: string;
}

interface MemberCardProps {
  user: User;
}

export const MemberCard: React.FC<MemberCardProps> = ({ user }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      border: 'none',
      borderRadius: '20px',
      padding: '20px',
      margin: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      width: '280px',
      minWidth: '280px',
      maxWidth: '280px',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      e.currentTarget.style.borderColor = '#3b82f6';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
      e.currentTarget.style.borderColor = '#e1e5e9';
    }}>
      
      {/* Profile Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src={user.profileImageURL || '/placeholder-avatar.png'} 
            alt={user.name || 'User'} 
            style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '2px solid rgba(59, 130, 246, 0.1)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
            }} 
          />
          {/* Online indicator */}
          <div style={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            width: '14px',
            height: '14px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
          }} />
        </div>
        
        <div style={{ marginLeft: '14px', flex: 1 }}>
          <h3 style={{ 
            margin: '0 0 4px 0', 
            fontSize: '1.05em', 
            fontWeight: '700',
            color: '#1f2937',
            lineHeight: '1.3'
          }}>
            {user.name || 'Unknown User'}
          </h3>
          <p style={{ 
            margin: '0', 
            fontSize: '0.85em', 
            color: '#6b7280',
            fontWeight: '500'
          }}>
            @{user.username || 'unknown'}
          </p>
        </div>
      </div>

      {/* Quote Section */}
      {user.quote && (
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            padding: '16px',
            backgroundColor: 'rgba(59, 130, 246, 0.04)',
            borderRadius: '16px',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            position: 'relative'
          }}>
            <p style={{
              margin: '0',
              fontSize: '0.85em',
              lineHeight: '1.6',
              color: '#4b5563',
              fontStyle: 'italic'
            }}>
              "{user.quote}"
            </p>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        paddingTop: '16px',
        borderTop: '1px solid rgba(226, 232, 240, 0.6)'
      }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ 
            fontSize: '1em', 
            fontWeight: '700', 
            color: '#1f2937',
            marginBottom: '4px'
          }}>
            {(user.followers || 0).toLocaleString()}
          </div>
          <div style={{ 
            fontSize: '0.7em', 
            color: '#6b7280',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Followers
          </div>
        </div>
        
        <div style={{ 
          width: '1px', 
          backgroundColor: 'rgba(226, 232, 240, 0.8)',
          margin: '0 12px'
        }} />
        
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ 
            fontSize: '1em', 
            fontWeight: '700', 
            color: '#1f2937',
            marginBottom: '4px'
          }}>
            {(user.following || 0).toLocaleString()}
          </div>
          <div style={{ 
            fontSize: '0.7em', 
            color: '#6b7280',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Following
          </div>
        </div>
        
        <div style={{ 
          width: '1px', 
          backgroundColor: 'rgba(226, 232, 240, 0.8)',
          margin: '0 12px'
        }} />
        
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ 
            fontSize: '1em', 
            fontWeight: '700', 
            color: '#1f2937',
            marginBottom: '4px'
          }}>
            {(user.subscribing || 0).toLocaleString()}
          </div>
          <div style={{ 
            fontSize: '0.7em', 
            color: '#6b7280',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Subscribing
          </div>
        </div>
      </div>

    </div>
  );
};