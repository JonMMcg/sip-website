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
    <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
      {/* Message Thread */}
      <div className="p-4 min-h-[60px]">
        {/* Sender Name */}
        <div className="text-xs text-primary-red mb-1 font-medium">
          {last_message_username || 'Anonymous'}
        </div>
        
        {/* Message Bubble */}
        <div className="relative inline-block max-w-[85%] bg-secondary-red text-primary-white py-2.5 px-3.5 rounded-2xl rounded-bl-lg shadow-sm">
          <p className="m-0 text-sm leading-snug break-words">
            {last_message || 'No messages yet.'}
          </p>
          
          {/* Message tail */}
          <div className="absolute bottom-0 -left-1 w-0 h-0 border-solid border-b-8 border-r-8 border-transparent border-b-secondary-red" />
        </div>
        
        {/* Timestamp */}
        <div className="text-xs text-secondary-gray/70 mt-1 ml-1">
          {formatTimestamp(last_message_time)}
        </div>
      </div>
    </div>
  );
};
