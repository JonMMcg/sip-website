import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../auth/firebase.config';
import { User } from '../components/MemberCard';

export const useGroupMembers = (groupId: string | undefined) => {
  const [members, setMembers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setMembers([]);
      setLoading(false);
      return;
    }

    const fetchGroupMembers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Step 1: Get all member IDs from the members subcollection
        console.log(`Fetching members for group: ${groupId}`);
        const membersCollectionRef = collection(db, `version/0.0.3/groups/${groupId}/members`);
        const membersSnapshot = await getDocs(membersCollectionRef);
        
        if (membersSnapshot.empty) {
          console.log('No members found for this group');
          setMembers([]);
          setLoading(false);
          return;
        }

        // Extract member user IDs (document IDs are the user IDs)
        const memberIds = membersSnapshot.docs.map(doc => doc.id);
        console.log(`Found ${memberIds.length} members:`, memberIds);

        // Step 2: Batch fetch user data for all members using Promise.all
        const userPromises = memberIds.map(async (userId) => {
          try {
            const userDocRef = doc(db, `version/0.0.3/users/${userId}`);
            const userSnap = await getDoc(userDocRef);
            
            if (userSnap.exists()) {
              return { uId: userSnap.id, ...userSnap.data() } as User;
            } else {
              console.warn(`User document not found for ID: ${userId}`);
              return null;
            }
          } catch (userError) {
            console.error(`Error fetching user ${userId}:`, userError);
            return null;
          }
        });

        // Wait for all user fetches to complete
        const userResults = await Promise.all(userPromises);
        
        // Filter out null results (users that couldn't be fetched)
        const validUsers = userResults.filter((user): user is User => user !== null);
        
        console.log(`Successfully fetched ${validUsers.length} out of ${memberIds.length} user profiles`);
        setMembers(validUsers);

      } catch (err) {
        console.error('Error fetching group members:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupMembers();
  }, [groupId]);

  return { members, loading, error };
};