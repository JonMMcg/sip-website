import React from 'react';

interface GroupLatestMessagesProps {
  last_message: string | null;
  last_message_username: string | null;
  last_message_time: any; // Ideally Firestore Timestamp
}

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

export const GroupLatestMessages: React.FC<GroupLatestMessagesProps> = ({ 
  last_message, 
  last_message_username, 
  last_message_time 
}) => {
  if (!last_message && !last_message_username) {
    return null; // Don't render anything if there's no activity
  }

  return (
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
          {last_message_username || 'Anonymous'}
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
          {last_message || 'No messages yet.'}
          
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
          {formatTimestamp(last_message_time)}
        </div>
      </div>
    </div>
  );
};
