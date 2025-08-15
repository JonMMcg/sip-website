import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { UserInfoSection } from './components/UserInfoSection';
import { MessagesSection } from './components/MessagesSection';
import { GroupInfoSection } from './components/GroupInfoSection';
import { useUserInfo } from './hooks/useUserInfo';
import { useGroupInfo } from './hooks/useGroupInfo';

// Default user ID for testing
const DEFAULT_USER_ID = "Fnr6fXn7s9SSK5ZgzQ3HE6c5P5u1"; // Yi Yang's user ID from the message example

interface GroupMemberPageProps {
  groupId?: string;
  userId?: string;
}

const GroupMemberPage: React.FC<GroupMemberPageProps> = ({ 
  groupId = "smqKyEAq4hZfY1ApzVEH", // Default to Yi's AMA if no groupId provided
  userId = DEFAULT_USER_ID 
}) => {
  // Fetch user information using our custom hook
  const { userInfo, loading: userLoading, error: userError } = useUserInfo(userId);
  
  // Fetch group information using our custom hook
  const { groupInfo, loading: groupLoading, error: groupError } = useGroupInfo(groupId);

  // For testing, we'll also create a mock user info as fallback
  const mockUserInfo = {
    id: userId,
    name: "Yi Yang 😎",
    username: "yiyang",
    profileImageURL: "https://firebasestorage.googleapis.com:443/v0/b/project-tittle-tattle-429701.appspot.com/o/ProfileImages%2F4C5EBE21-6131-4476-9785-54EE2DB305ED.jpg?alt=media&token=28bd0213-787b-4a20-a125-17f9df1175d3",
    bio: "Experienced economist turned founder, building Sip. Ask me anything about startups, economics, or entrepreneurship!",
    followers: 1248,
    following: 892,
    subscribing: 23,
    quote: "Every question is an opportunity to learn something new."
  };

  // Mock group info as fallback for testing
  const mockGroupInfo = {
    id: groupId,
    name: groupId === "oF7Slg0YEEEtsfyKSkdV" ? "SIP Founders" : "Yi's AMA",
    description: groupId === "oF7Slg0YEEEtsfyKSkdV" 
      ? "Connect with fellow SIP founders and entrepreneurs. Share insights, ask questions, and build the future together."
      : "Ask Yi Yang anything about entrepreneurship, economics, and building startups. Share your questions and get insights from an experienced founder.",
    groupImage: "https://firebasestorage.googleapis.com:443/v0/b/project-tittle-tattle-429701.appspot.com/o/ProfileImages%2F4C5EBE21-6131-4476-9785-54EE2DB305ED.jpg?alt=media&token=28bd0213-787b-4a20-a125-17f9df1175d3",
    subscribersCount: groupId === "oF7Slg0YEEEtsfyKSkdV" ? 234 : 847,
    isActive: true,
    createdAt: new Date('2024-01-15')
  };

  return (
    <div className="min-h-screen bg-secondary-blue">
      <Navigation variant="static" />
      
      <main className="container mx-auto px-5 py-8">

        {/* User Info Banner - Full Width */}
        <div className="mb-8 max-w-7xl mx-auto">
          <UserInfoSection 
            user={userInfo || mockUserInfo} 
            loading={userLoading}
          />
        </div>

        {/* Bottom Row - Group Info & Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-start">
          
          {/* Left: Group Info (45% width - roughly 5.4/12 columns) */}
          <div className="lg:col-span-5 h-full">
            <GroupInfoSection 
              group={groupInfo || mockGroupInfo} 
              loading={groupLoading}
            />
          </div>

          {/* Right: Messages Section (55% width - roughly 6.6/12 columns) */}
          <div className="lg:col-span-7 h-full">
            <MessagesSection 
              groupId={groupId}
              userId={userId} // Filter messages by this user
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroupMemberPage;