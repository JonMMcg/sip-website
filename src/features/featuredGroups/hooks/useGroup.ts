import { useState, useEffect } from 'react';
import { Group, getGroupById } from '../services/groupService';

export const useGroup = (groupId: string | undefined) => {
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Don't fetch if there's no groupId
    if (!groupId) {
      setLoading(false);
      return;
    }

    const fetchGroup = async () => {
      try {
        setLoading(true);
        const data = await getGroupById(groupId);
        setGroup(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [groupId]); // Rerun the effect if the groupId changes

  return { group, loading, error };
};
