import { useState, useEffect } from 'react';
import { Group } from '../types';
import { GroupMemberService } from '../services/groupMemberService';

export const useGroupInfo = (groupId: string | null) => {
  const [groupInfo, setGroupInfo] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setLoading(false);
      return;
    }

    const fetchGroupInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const fetchedGroup = await GroupMemberService.getGroupInfo(groupId);
        setGroupInfo(fetchedGroup);
      } catch (err) {
        console.error('Error fetching group info:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch group info'));
      } finally {
        setLoading(false);
      }
    };

    fetchGroupInfo();
  }, [groupId]);

  const refetch = async () => {
    if (!groupId) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const fetchedGroup = await GroupMemberService.getGroupInfo(groupId);
      setGroupInfo(fetchedGroup);
    } catch (err) {
      console.error('Error refetching group info:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch group info'));
    } finally {
      setLoading(false);
    }
  };

  return {
    groupInfo,
    loading,
    error,
    refetch
  };
};