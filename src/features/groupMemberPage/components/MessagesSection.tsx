import React, { useState, useEffect, useRef } from 'react';
import { MessageCard } from './MessageCard';
import { Message, MessagesSectionProps } from '../types';
import { GroupMemberService } from '../services/groupMemberService';

export const MessagesSection: React.FC<MessagesSectionProps> = ({ groupId, userId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [messageCount, setMessageCount] = useState(0);

  // Initial load
  useEffect(() => {
    loadMessages(true);
    if (userId) {
      loadMessageCount();
    }
  }, [groupId, userId]);

  const loadMessages = async (isInitial = false) => {
    try {
      if (isInitial) {
        setLoading(true);
        setError(null);
      } else {
        setLoadingMore(true);
      }

      const fetchedMessages = await GroupMemberService.getGroupMessages(
        groupId, 
        50, // Load 50 messages at a time
        userId // Filter by user if specified
      );

      if (isInitial) {
        setMessages(fetchedMessages);
      } else {
        // For pagination, you'd append to existing messages
        setMessages(prev => [...prev, ...fetchedMessages]);
      }

      // If we got fewer than 50 messages, we've reached the end
      setHasMore(fetchedMessages.length === 50);
    } catch (err) {
      console.error('Error loading messages:', err);
      setError(err instanceof Error ? err.message : 'Failed to load messages');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMessageCount = async () => {
    if (!userId) return;
    try {
      const count = await GroupMemberService.getUserMessageCount(groupId, userId);
      setMessageCount(count);
    } catch (err) {
      console.error('Error loading message count:', err);
    }
  };

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      loadMessages(false);
    }
  };

  // Auto-scroll to bottom on initial load
  useEffect(() => {
    if (!loading && messages.length > 0 && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="bg-primary-white rounded-2xl p-6 shadow-soft h-96">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-secondary-gray/20 rounded animate-pulse w-32"></div>
          <div className="h-4 bg-secondary-gray/20 rounded animate-pulse w-20"></div>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-secondary-gray/20 rounded-full animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-secondary-gray/20 rounded animate-pulse w-32"></div>
                  <div className="h-3 bg-secondary-gray/20 rounded animate-pulse w-20"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-secondary-gray/20 rounded animate-pulse"></div>
                <div className="h-4 bg-secondary-gray/20 rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-primary-white rounded-2xl p-6 shadow-soft">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-primary-black mb-2">Error Loading Messages</h3>
          <p className="text-secondary-gray mb-4">{error}</p>
          <button 
            onClick={() => loadMessages(true)}
            className="px-4 py-2 bg-primary-red text-primary-white rounded-lg hover:bg-primary-red/90 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-white rounded-2xl shadow-soft overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-primary-blue/5 to-primary-red/5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-primary-black">
            {userId ? 'User Messages' : 'Group Messages'}
          </h3>
          {userId && messageCount > 0 && (
            <span className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full font-medium text-sm">
              {messageCount} total messages
            </span>
          )}
        </div>
      </div>

      {/* Messages Container */}
      <div 
        ref={scrollContainerRef}
        className="p-4 space-y-2 flex-grow overflow-y-auto"
        style={{ maxHeight: 'calc(100% - 80px)' }}
      >
        {messages.length === 0 ? (
          <div className="text-center py-12 text-secondary-gray">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg">No messages found</p>
            <p className="text-sm">
              {userId ? 'This user hasn\'t sent any messages in this group yet.' : 'No messages in this group yet.'}
            </p>
          </div>
        ) : (
          <>
            {/* Messages list - reverse chronological order (newest first) */}
            {messages.map((message) => (
              <MessageCard 
                key={message.id} 
                message={message} 
                showUserInfo={!userId} // Hide user info if viewing specific user's messages
              />
            ))}

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center py-4">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-6 py-2 bg-primary-blue text-primary-white rounded-lg hover:bg-primary-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {loadingMore ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    'Load More Messages'
                  )}
                </button>
              </div>
            )}

            {/* End of messages indicator */}
            {!hasMore && messages.length > 0 && (
              <div className="text-center py-4 text-secondary-gray text-sm">
                <div className="inline-flex items-center space-x-2">
                  <div className="h-px bg-slate-200 flex-1 w-12"></div>
                  <span>End of messages</span>
                  <div className="h-px bg-slate-200 flex-1 w-12"></div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};