import { useState, useEffect } from 'react';
import { UserInfo } from '../types';
import { GroupMemberService } from '../services/groupMemberService';

export const useUserInfo = (userId: string | null) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const fetchedUser = await GroupMemberService.getUserInfo(userId);
        setUserInfo(fetchedUser);
      } catch (err) {
        console.error('Error fetching user info:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch user info'));
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  const refetch = async () => {
    if (!userId) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const fetchedUser = await GroupMemberService.getUserInfo(userId);
      setUserInfo(fetchedUser);
    } catch (err) {
      console.error('Error refetching user info:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch user info'));
    } finally {
      setLoading(false);
    }
  };

  return {
    userInfo,
    loading,
    error,
    refetch
  };
};