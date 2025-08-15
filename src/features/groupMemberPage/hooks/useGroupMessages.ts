import { useState, useEffect } from 'react';
import { Message } from '../types';
import { GroupMemberService } from '../services/groupMemberService';

export const useGroupMessages = (groupId: string, userId?: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) return;

    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const fetchedMessages = await GroupMemberService.getGroupMessages(
          groupId, 
          50,
          userId
        );
        
        setMessages(fetchedMessages);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch messages'));
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [groupId, userId]);

  const refetch = async () => {
    if (!groupId) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const fetchedMessages = await GroupMemberService.getGroupMessages(
        groupId, 
        50,
        userId
      );
      
      setMessages(fetchedMessages);
    } catch (err) {
      console.error('Error refetching messages:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch messages'));
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    error,
    refetch
  };
};