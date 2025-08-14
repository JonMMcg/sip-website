import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../auth/firebase.config";

// 1. Define the shape of our group data to match Firestore
export interface Group {
  id: string;
  name: string;
  description: string;
  groupImage: string;
  subscribersCount: number;
  mode: "public" | "private";
  shareURL: string;
  ownerId: string;
  isDeleted: boolean;
  last_message: string | null;
  last_message_time: any; // Ideally Firebase.Timestamp
  last_message_username: string | null;
  createdAt: any; // Ideally Firebase.Timestamp
  deletedAt: any | null; // Ideally Firebase.Timestamp
  totalComments: number;
  totalLikes: number;
}

// 2. Create the function to fetch the data.
export const getFeaturedGroups = async (): Promise<Group[]> => {
  console.log("Fetching featured groups...");
  // This uses a real Firebase query.
  // NOTE: This assumes you have a field "isFeatured" in your documents.
  // If not, you might query by "mode" or another field.
  const groupsCollection = collection(db, "version/0.0.3/groups");
  const q = query(groupsCollection, where("isDeleted", "==", false), where("mode", "==", "public"));
  const groupSnapshot = await getDocs(q);
  const groupList = groupSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Group[];
  return groupList;
};

// 3. Create a function to fetch a single group by its ID
export const getGroupById = async (groupId: string): Promise<Group | null> => {
  console.log(`Fetching group with ID: ${groupId}`);
  const groupDocRef = doc(db, `version/0.0.3/groups/${groupId}`);
  const groupSnap = await getDoc(groupDocRef);

  if (groupSnap.exists()) {
    return { id: groupSnap.id, ...groupSnap.data() } as Group;
  } else {
    return null; // Or throw an error
  }
};
