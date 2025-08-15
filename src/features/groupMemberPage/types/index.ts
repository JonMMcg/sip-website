// Message types from Firebase
export type MessageType = 'text' | 'audio' | 'gif' | 'image';

// Group information interface
export interface Group {
  id: string;
  name: string;
  description?: string;
  groupImage?: string;
  subscribersCount?: number;
  createdAt?: Date | { seconds: number; nanoseconds: number };
  isActive?: boolean;
}

export interface Message {
  id: string;
  cups: number;
  groupId: string;
  imageHeight: number;
  imageURL: string;
  imageWidth: number;
  likes: number;
  message: string;
  replyCount: number;
  senderId: string;
  senderImage: string;
  senderName: string;
  time: Date | { seconds: number; nanoseconds: number }; // Firebase timestamp
  type: MessageType;
}

// User information for display
export interface UserInfo {
  id: string;
  name: string;
  username?: string;
  profileImageURL: string;
  bio?: string;
  followers?: number;
  following?: number;
  subscribing?: number;
  quote?: string;
}

// Component props interfaces
export interface UserInfoSectionProps {
  user: UserInfo;
  loading?: boolean;
}

export interface MessagesSectionProps {
  groupId: string;
  userId?: string; // Optional: filter messages by specific user
}

export interface MessageCardProps {
  message: Message;
  showUserInfo?: boolean; // Whether to show sender info (for group context)
}

export interface GroupInfoSectionProps {
  group: Group;
  loading?: boolean;
}