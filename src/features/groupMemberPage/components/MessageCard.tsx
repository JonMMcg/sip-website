import React from 'react';
import { MessageCardProps } from '../types';

export const MessageCard: React.FC<MessageCardProps> = ({ message, showUserInfo = true }) => {
  
  const formatTimestamp = (time: Date | { seconds: number; nanoseconds: number }): string => {
    let date: Date;
    
    if (time instanceof Date) {
      date = time;
    } else {
      date = new Date(time.seconds * 1000);
    }
    
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const renderMessageContent = () => {
    switch (message.type) {
      case 'text':
        return (
          <div className="text-primary-gray leading-relaxed break-words">
            {message.message}
          </div>
        );
      
      case 'image':
        return (
          <div>
            {message.message && (
              <div className="text-primary-gray leading-relaxed mb-3 break-words">
                {message.message}
              </div>
            )}
            {message.imageURL && (
              <img 
                src={message.imageURL} 
                alt="Message attachment"
                className="rounded-lg max-w-full h-auto shadow-md hover:shadow-lg transition-shadow duration-200"
                style={{ 
                  maxHeight: '400px',
                  width: message.imageWidth ? `${Math.min(message.imageWidth, 400)}px` : 'auto'
                }}
              />
            )}
          </div>
        );
      
      case 'gif':
        return (
          <div>
            {message.message && (
              <div className="text-primary-gray leading-relaxed mb-3 break-words">
                {message.message}
              </div>
            )}
            {message.imageURL && (
              <img 
                src={message.imageURL} 
                alt="GIF"
                className="rounded-lg max-w-full h-auto shadow-md"
                style={{ maxHeight: '300px' }}
              />
            )}
          </div>
        );
      
      case 'audio':
        return (
          <div>
            {message.message && (
              <div className="text-primary-gray leading-relaxed mb-3 break-words">
                {message.message}
              </div>
            )}
            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg border">
              <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-secondary-gray">Audio Message</span>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-primary-gray leading-relaxed break-words">
            {message.message || 'Unknown message type'}
          </div>
        );
    }
  };

  return (
    <div className="bg-primary-white rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-200 mb-4">
      {/* User Info Header (if enabled) */}
      {showUserInfo && (
        <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-slate-100">
          <img 
            src={message.senderImage || '/placeholder-avatar.png'} 
            alt={`${message.senderName} profile`}
            className="w-10 h-10 rounded-full object-cover border border-primary-blue/10"
          />
          <div className="flex-1">
            <h4 className="font-medium text-primary-black text-sm">{message.senderName}</h4>
            <p className="text-xs text-secondary-gray">{formatTimestamp(message.time)}</p>
          </div>
        </div>
      )}

      {/* Message Content */}
      <div className={showUserInfo ? '' : 'pt-2'}>
        {renderMessageContent()}
      </div>

      {/* Message Stats */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center space-x-4 text-xs text-secondary-gray">
          {/* Likes */}
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{message.likes || 0}</span>
          </div>

          {/* Replies */}
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{message.replyCount || 0}</span>
          </div>

          {/* Cups */}
          {message.cups > 0 && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>{message.cups}</span>
            </div>
          )}
        </div>

        {/* Timestamp (if not showing user info) */}
        {!showUserInfo && (
          <span className="text-xs text-secondary-gray">
            {formatTimestamp(message.time)}
          </span>
        )}
      </div>
    </div>
  );
};