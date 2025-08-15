import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  doc, 
  getDoc,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../../auth/firebase.config';
import { Message, UserInfo, Group } from '../types';

export class GroupMemberService {
  
  /**
   * Fetch messages from a specific group
   * Path: /version/0.0.3/groups/{groupId}/messages/
   */
  static async getGroupMessages(
    groupId: string, 
    limitCount: number = 50,
    userId?: string // Optional: filter by specific user
  ): Promise<Message[]> {
    try {
      const messagesPath = `version/0.0.3/groups/${groupId}/messages`;
      const messagesRef = collection(db, messagesPath);
      
      // Build query with optional user filter
      let q = query(
        messagesRef,
        orderBy('time', 'desc'), // Most recent first
        limit(limitCount)
      );
      
      // Add user filter if specified
      if (userId) {
        q = query(
          messagesRef,
          where('senderId', '==', userId),
          orderBy('time', 'desc'),
          limit(limitCount)
        );
      }
      
      const querySnapshot = await getDocs(q);
      
      const messages: Message[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          cups: data.cups || 0,
          groupId: data.groupId || groupId,
          imageHeight: data.imageHeight || 0,
          imageURL: data.imageURL || '',
          imageWidth: data.imageWidth || 0,
          likes: data.likes || 0,
          message: data.message || '',
          replyCount: data.replyCount || 0,
          senderId: data.senderId || '',
          senderImage: data.senderImage || '',
          senderName: data.senderName || 'Unknown User',
          time: data.time instanceof Timestamp ? data.time.toDate() : data.time,
          type: data.type || 'text'
        } as Message;
      });
      
      return messages;
    } catch (error) {
      console.error('Error fetching group messages:', error);
      console.error('Group ID:', groupId);
      console.error('Messages Path:', `version/0.0.3/groups/${groupId}/messages`);
      console.error('Error details:', error);
      throw new Error(`Failed to fetch messages: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  /**
   * Fetch user information by user ID
   * This would need to be implemented based on your user data structure
   */
  static async getUserInfo(userId: string): Promise<UserInfo | null> {
    try {
      // TODO: Replace with your actual user document path
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        return null;
      }
      
      const userData = userDoc.data();
      return {
        id: userId,
        name: userData.name || userData.displayName || 'Unknown User',
        username: userData.username || '',
        profileImageURL: userData.profileImageURL || userData.photoURL || '',
        bio: userData.bio || '',
        followers: userData.followers || 0,
        following: userData.following || 0,
        subscribing: userData.subscribing || 0,
        quote: userData.quote || ''
      } as UserInfo;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  }
  
  /**
   * Get message count for a user in a specific group
   */
  static async getUserMessageCount(groupId: string, userId: string): Promise<number> {
    try {
      const messagesPath = `version/0.0.3/groups/${groupId}/messages`;
      const messagesRef = collection(db, messagesPath);
      
      const q = query(
        messagesRef,
        where('senderId', '==', userId)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.size;
    } catch (error) {
      console.error('Error getting user message count:', error);
      return 0;
    }
  }

  /**
   * Fetch group information by group ID
   * Path: /version/0.0.3/groups/{groupId}
   */
  static async getGroupInfo(groupId: string): Promise<Group | null> {
    try {
      const groupRef = doc(db, 'version/0.0.3/groups', groupId);
      const groupDoc = await getDoc(groupRef);
      
      if (!groupDoc.exists()) {
        return null;
      }
      
      const groupData = groupDoc.data();
      return {
        id: groupId,
        name: groupData.name || 'Unnamed Group',
        description: groupData.description || '',
        groupImage: groupData.groupImage || '',
        subscribersCount: groupData.subscribersCount || 0,
        createdAt: groupData.createdAt instanceof Timestamp ? groupData.createdAt.toDate() : groupData.createdAt,
        isActive: groupData.isActive !== undefined ? groupData.isActive : true
      } as Group;
    } catch (error) {
      console.error('Error fetching group info:', error);
      console.error('Group ID:', groupId);
      console.error('Group Path:', `version/0.0.3/groups/${groupId}`);
      console.error('Error details:', error);
      return null;
    }
  }
}