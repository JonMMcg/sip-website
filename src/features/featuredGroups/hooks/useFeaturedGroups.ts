import { useState, useEffect } from 'react';
import { Group, getFeaturedGroups } from '../services/groupService';

export const useFeaturedGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const data = await getFeaturedGroups();
        setGroups(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []); // Empty dependency array means this runs once on mount

  return { groups, loading, error };
};
