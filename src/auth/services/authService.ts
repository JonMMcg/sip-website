import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from '../firebase.config';

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

// Configure Google provider
googleProvider.addScope('profile');
googleProvider.addScope('email');

// Configure Apple provider
appleProvider.addScope('email');
appleProvider.addScope('name');

export const authService = {
  // Sign in with Google
  signInWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return {
        success: true,
        user: result.user,
        error: null
      };
    } catch (error: any) {
      return {
        success: false,
        user: null,
        error: error.message
      };
    }
  },

  // Sign in with Apple
  signInWithApple: async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      return {
        success: true,
        user: result.user,
        error: null
      };
    } catch (error: any) {
      return {
        success: false,
        user: null,
        error: error.message
      };
    }
  },

  // Sign out
  signOut: async () => {
    try {
      await firebaseSignOut(auth);
      return {
        success: true,
        error: null
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message
      };
    }
  },

  // Get current user
  getCurrentUser: () => {
    return auth.currentUser;
  },

  // Listen to auth state changes
  onAuthStateChange: (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
  }
};